import { graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import GetStripe from "../utils/stripejs"
import styled from 'styled-components'

const ItemView = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  border: solid;
  border-radius: 16px;
  align-items: center;
  margin: 5px 5px 5px 5px;
`
const buttonStyles = {
  fontSize: "13px",
  textAlign: "center",
  color: "#000",
  padding: "12px 60px",
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  backgroundColor: "rgb(255, 178, 56)",
  borderRadius: "6px",
  letterSpacing: "1.5px",
  width: "350px",
}
const buttonDisabledStyles = {
  opacity: "0.5",
  cursor: "not-allowed",
}
export default function SkuButton() {
  const data = useStaticQuery(graphql`
    query MySkuQuery {
      stripePrice(product: {id: {eq: "testID"}}) {
        id
      }
    }
  `)
  const [loading, setLoading] = useState(false)
  const redirectToCheckout = async event => {
    event.preventDefault()
    setLoading(true)
    const stripe = await GetStripe()
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [{ price: data.stripePrice.id, quantity: 1 }],
      successUrl: `http://localhost:8000/success/`,
      cancelUrl: `http://localhost:8000/`,
    })
    if (error) {
      console.warn("Error:", error)
      setLoading(false)
    }
  }
  return (
    <ItemView>
      <img width="400px" height="400px" alt="productImage" src="https://files.stripe.com/links/MDB8YWNjdF8xSWZENjZHdm5DdDd4bDJTfGZsX3Rlc3RfMXZVdnVkOGxEak1PeG41SHp3ZlVPR2d300FnHAQ7iH"></img>
      <button
        disabled={loading}
        style={
          loading ? { ...buttonStyles, ...buttonDisabledStyles } : buttonStyles
        }
        onClick={redirectToCheckout}
      >
        $5 sku Item
        <div>
            
        </div>
      </button>
      <p>
      *Stripe doesn't support purchase by SKU with finite stock clientside yet 5/11/21, this is a price object atached to a sku'd item. Acting the same as $5 unlimted
      </p>
    </ItemView>
  )
}