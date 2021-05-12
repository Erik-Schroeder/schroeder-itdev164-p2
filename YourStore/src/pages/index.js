import React from "react"
import styled from 'styled-components'
import ItemButton from "../components/ItemButton"
import SubButton from "../components/SubButton";
import SkuButton from "../components/SkuButton";

const PageView = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export default function Home() {
  return(
      <PageView>
        <ItemButton />
        <SubButton/>
        <SkuButton/>
      </PageView>
  );
}