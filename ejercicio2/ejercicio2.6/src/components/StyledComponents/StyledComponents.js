import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 70px;
    background-color: orange;
`

const Title = styled.h1`
    font-size: 2rem;
    margin: 0;
`

const Header = styled.div`
    width: calc(100vw - 300px);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
`

const Footer = styled.footer`
    width: calc(100vw - 300px);
    height: 70px;
    position: fixed;
    bottom: 0;
    background-color: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    box-sizing: border-box;
`

const BodyConteiner = styled.div`
    width: 100%;
    height: calc(100vh - 70px - 70px);
    display: flex;
    justify-content: center;
    align-items: center;
`

const BodyContent = styled.div`
    width: 300px;
    height: 300px;
    background-color: green;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 .5rem;
`

export default function StyledComponents() {
    return (
        <Container>
            <Header>
                <Title>
                    StyledComponents
                </Title>
            </Header>

            <BodyConteiner>
                <BodyContent>
                    <Title>
                        BodyContent1
                    </Title>
                </BodyContent>
                <BodyContent>
                    <Title>
                        BodyContent2
                    </Title>
                </BodyContent>
                <BodyContent>
                    <Title>
                        BodyContent3
                    </Title>
                </BodyContent>
            </BodyConteiner>

            <Footer>
                <h2>Footer</h2>
            </Footer>
        </Container>
    )
}
