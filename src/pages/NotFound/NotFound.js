import styled from 'styled-components'

export const NotFoundContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px 30px 30px;
    height: fit-content;
    position: relative;
    z-index: 1;
    flex-direction: column;
    min-height: 90vh;
`

export const NotFoundContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: relative;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5rem 0;
`

export const NotFoundH1 = styled.h1`
    text-align: center;
`

export const NotFoundParagraph = styled.p`
    margin-top: 1rem;
    text-align: center;
`

export const NotFoundImage = styled.img`
    max-width:60vw;
`

export const NotFoundImageContainer = styled.div`
    max-width: 60vw;
    margin: 65px 0 35px 0;

    @media screen and (max-width:768px) {
        max-width: 70vw;
    }
`
export const LinkSpan = styled.a`
    font-family: 'Source Sans Pro', sans-serif;
    line-height: 24px;
    text-decoration: underline;
    cursor: pointer;
    color: #393232;

    &:active{
        color: #393232;
    }
    &:hover{
        color: #393232;
    }
    &:visited{
        color: #393232;
    }
`