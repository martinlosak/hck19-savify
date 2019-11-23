import React from 'react'
import {Page} from 'react-onsenui'
import {compose} from 'ramda'
import './info-style.sass'

const Info = ({renderToolbar}) =>
    <Page
        className={'overview'}
        renderToolbar={renderToolbar({
            title: 'Accounts'
        })}>

        <h4>What is an ETF?</h4>
        <p>
            A ETF („Exchange Traded Fund“) is a stock-exchanged Index fonds, which pichtues the performance of an index,
            like the NASDAQ. In the core ETFs compare the advantages of Stocks and shares in one product.
        </p>
        <iframe
            width="360"
            height="200"
            src="https://www.youtube.com/embed/A62WuFcR5Cw" frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>

        <h4>How does the stock exchange work?</h4>
        <iframe
            width="360"
            height="200"
            src="https://www.youtube.com/embed/NpZpAK04sx0" frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>

        <h4>What are the advantages of ETF?</h4>
        <p>
            In comparision to other stock products ETFs have the advantage to its lower costs. Instead of fees for issue
            surcharge, there are only fees for trading charged. Also the annual administration fee is about 0,5 % and
            therefore cheaper than other products.
        </p>

        <h4>How to start with investing in ETFs?</h4>
        <iframe
            width="360"
            height="200"
            src="https://www.youtube.com/embed/kytT1lBB0t8" frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>

        <h4>Why it is useful to invest with an investment plan?</h4>

        <iframe
            width="360"
            height="200"
            src="https://www.youtube.com/embed/NpZpAK04sx0" frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>


        <h4>How to buy invest in investment plan?</h4>
        <p>We will guide you through the process. Just contact us.</p>

    </Page>

export default compose(x => x)(Info)
