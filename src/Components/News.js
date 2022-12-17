import React from 'react'
import NewsItem from './NewsItem';
const articles = [
        
    {
        "source": {
            "id": "al-jazeera-english",
            "name": "Al Jazeera English"
        },
        "author": "Al Jazeera",
        "title": "Asia Cup: India vs Pakistan Super 4 preview",
        "description": "India and Pakistan will take on each other in the Super 4 round of the Asia Cup cricket tournament.",
        "url": "http://www.aljazeera.com/sports/2022/9/4/asia-cup-india-vs-pakistan-super-4-preview",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2022/08/2022-08-28T130557Z_1188680411_UP1EI8S10DV8F_RTRMADP_3_CRICKET-ASIANCUP-UAE.jpg?resize=1920%2C1440",
        "publishedAt": "2022-09-04T05:29:18Z",
        "content": "Who: India vs Pakistan, Super 4Where: Dubai cricket stadiumWhen: Sunday, September 4, 2022 (15:00 GMT)\r\nAfter not locking horns for almost a year, Pakistan and India take on each other on a cricket p… [+2614 chars]"
    },
    {
        "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
        "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
        "publishedAt": "2020-04-27T11:41:47Z",
        "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
        "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
        "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
        "publishedAt": "2020-03-30T15:26:05Z",
        "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    },
    {
        "source": {
          "id": "wired",
          "name": "Wired"
        },
        "author": "Gian M. Volpicelli",
        "title": "Ethereum's 'Merge' Is a Big Deal for Crypto—and the Planet",
        "description": "One of the most influential cryptocurrency projects is set to finally ditch proof-of-work mining.",
        "url": "https://www.wired.com/story/ethereum-merge-big-deal-crypto-environment/",
        "urlToImage": "https://media.wired.com/photos/62fe63bcfd602ff2f11e6fbf/191:100/w_1280,c_limit/Ethereum-Ditches-Crypto-Business-1036181110.jpg",
        "publishedAt": "2022-08-18T16:09:33Z",
        "content": "Cryptocurrencies are often criticized for being bad for the planet. Every year, bitcoin mining consumes more energy than Belgium, according to the University of Cambridges Bitcoin Electricity Consump… [+3829 chars]"
      },
      {
        "source": {
          "id": "reuters",
          "name": "Reuters"
        },
        "author": null,
        "title": "Bitcoin drops 1.6% to below $20000 - Reuters",
        "description": "Bitcoin was off 1.63% at $19,920 by late afternoon in Europe on Saturday, down $330 from its previous close.",
        "url": "https://www.reuters.com/markets/us/bitcoin-drops-16-below-20000-2022-08-27/",
        "urlToImage": "https://www.reuters.com/resizer/AjlubzI3WawXrIpEPQYO0MzwlPY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/W4IF6T6QZFNZLAUT4ZH3FGXT6Y.jpg",
        "publishedAt": "2022-08-27T16:04:00Z",
        "content": "Aug 27 (Reuters) - Bitcoin was off 1.63% at $19,920 by late afternoon in Europe on Saturday, down $330 from its previous close.\r\nBitcoin, the world's biggest and best-known cryptocurrency, is down 58… [+336 chars]"
      },
      {
        "source": {
          "id": "reuters",
          "name": "Reuters"
        },
        "author": null,
        "title": "Sudden crypto drop sends bitcoin to 3-wk low - Reuters",
        "description": "Cryptocurrencies fell sharply on Friday, with sudden selling dragging bitcoin to a three-week low.",
        "url": "https://www.reuters.com/markets/us/sudden-crypto-drop-sends-bitcoin-3-wk-low-2022-08-19/",
        "urlToImage": "https://www.reuters.com/resizer/xTN_w6bEGIrdArCCNImqU8X1WnY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/VEMNAX3DIBMGZGCA5HIDFVEFVM.jpg",
        "publishedAt": "2022-08-19T07:19:00Z",
        "content": "SINGAPORE, Aug 19 (Reuters) - Cryptocurrencies fell sharply on Friday, with sudden selling dragging bitcoin to a three-week low.\r\nThe reason for the drop was not immediately clear. Bitcoin fell as mu… [+312 chars]"
      },
      {
        "source": {
          "id": "reuters",
          "name": "Reuters"
        },
        "author": null,
        "title": "Cryptoverse: Ether snaps at bitcoin's heels in race for crypto crown - Reuters.com",
        "description": "For years, ether could barely dream of challenging its big brother bitcoin. Now, its ambitions may be becoming more realistic.",
        "url": "https://www.reuters.com/technology/cryptoverse-ether-snaps-bitcoins-heels-race-crypto-crown-2022-09-13/",
        "urlToImage": "https://www.reuters.com/resizer/D6UAwg9xkBVA9UviKEjSKPGTI3w=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/QQABWUBD6JJ3JJLRDJTC3IQMFI.jpg",
        "publishedAt": "2022-09-13T05:12:00Z",
        "content": "Sept 13 (Reuters) - For years, ether could barely dream of challenging its big brother bitcoin. Now, its ambitions may be becoming more realistic.\r\nThe second-biggest cryptocurrency is taking market … [+3625 chars]"
      },
      {
        "source": {
          "id": "bbc-news",
          "name": "BBC News"
        },
        "author": "https://www.facebook.com/bbcnews",
        "title": "Ethereum Merge: How one big cryptocurrency is going green",
        "description": "Ethereum, which currently uses as much energy as a medium-sized country, is to halt cryptomining.",
        "url": "https://www.bbc.co.uk/news/technology-62891715",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/5833/production/_126697522_66d3ee21-4213-480e-954e-f9574f987446.jpg",
        "publishedAt": "2022-09-13T23:26:31Z",
        "content": "By Joe TidyCyber reporter \r\nThe second biggest cryptocurrency, Ethereum, is about to switch over to a new operating model that uses 99.9% less energy.\r\nThe change, called The Merge, is designed to wi… [+5489 chars]"
      },
      {
        "source": {
          "id": "reuters",
          "name": "Reuters"
        },
        "author": "Reuters Editorial",
        "title": "Crypto Weekly: Bitcoin slides back to $20,000 - Reuters",
        "description": "From bitcoin’s big slide back towards $20,000 to what a court says you can’t buy with Central African Republic’s new coin, we round up the week's big stories in the world of virtual money. Trevor Koroll reports.",
        "url": "https://www.reuters.com/video/watch/idOV160130082022RP1",
        "urlToImage": "https://static.reuters.com/resources/r/?d=20220830&i=OV160130082022RP1&r=OV160130082022RP1&t=2",
        "publishedAt": "2022-08-30T21:11:50Z",
        "content": "Posted \r\nFrom bitcoins big slide back towards $20,000 to what a court says you cant buy with Central African Republics new coin, we round up the week's big stories in the world of virtual money. Trev… [+17 chars]"
      },
      {
        "source": {
          "id": "reuters",
          "name": "Reuters"
        },
        "author": "Reuters Editorial",
        "title": "A year on, El Salvador's bitcoin trial is stumbling - Reuters",
        "description": "A year after El Salvador adopted bitcoin as legal tender, the area where the world's first cryptocurrency city was meant to be built is still dense jungle. Angela Johnston reports.",
        "url": "https://www.reuters.com/video/watch/idOV343307092022RP1",
        "urlToImage": "https://static.reuters.com/resources/r/?d=20220907&i=OV343307092022RP1&r=OV343307092022RP1&t=2",
        "publishedAt": "2022-09-07T22:50:11Z",
        "content": "Posted \r\nA year after El Salvador adopted bitcoin as legal tender, the area where the world's first cryptocurrency city was meant to be built is still dense jungle. Angela Johnston reports."
      },
      {
        "source": {
          "id": "reuters",
          "name": "Reuters"
        },
        "author": null,
        "title": "Bitcoin leaps over $20000 as U.S. dollar sags - Reuters.com",
        "description": "Bitcoin surged past the $20,000 barrier and was eyeing its best day in six weeks on Friday as the U.S. dollar fell broadly and markets found reasons to be cheerful at the end of a dour week.",
        "url": "https://www.reuters.com/technology/bitcoin-leaps-over-20000-us-dollar-sags-2022-09-09/",
        "urlToImage": "https://www.reuters.com/resizer/p7BxA15YEPz4q9B66YsLQLgimKc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/WGN4MHHONRKOVPA4I45NTIU62Q.jpg",
        "publishedAt": "2022-09-09T07:45:00Z",
        "content": "SINGAPORE, Sept 9 (Reuters) - Bitcoin surged past the $20,000 barrier and was eyeing its best day in six weeks on Friday as the U.S. dollar fell broadly and markets found reasons to be cheerful at th… [+1216 chars]"
      },
      {
        "source": {
          "id": "reuters",
          "name": "Reuters"
        },
        "author": null,
        "title": "A year on, El Salvador's bitcoin experiment is stumbling - Reuters",
        "description": "A year after El Salvador adopted bitcoin as legal tender, the area where the world's first cryptocurrency city was meant to be built - a circular metropolis powered by a volcano - is still dense jungle.",
        "url": "https://www.reuters.com/technology/year-el-salvadors-bitcoin-experiment-is-stumbling-2022-09-07/",
        "urlToImage": "https://www.reuters.com/resizer/M2nfbcQlV8tRGnSyxgL1ckw_GCo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/R5NQIKYDFJOPVKTTZCH3JCHMFM.jpg",
        "publishedAt": "2022-09-07T11:22:00Z",
        "content": "CONCHAGUA, El Salvador, Sept 7 (Reuters) - A year after El Salvador adopted bitcoin as legal tender, the area where the world's first cryptocurrency city was meant to be built - a circular metropolis… [+5145 chars]"
      },
      {
        "source": {
          "id": "reuters",
          "name": "Reuters"
        },
        "author": null,
        "title": "Cryptoverse: Bleeding bitcoin's holding out for a hero - Reuters",
        "description": "Cryptoverse: Bleeding bitcoin's holding out for a hero  Reuters",
        "url": "https://www.reuters.com/markets/europe/cryptoverse-bleeding-bitcoins-holding-out-hero-2022-08-30/",
        "urlToImage": "https://www.reuters.com/resizer/14CC3_xOfbC5OEGUr3z7N39xNHg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/BUOALE3VDVLURENRYFCO2JVESE.jpg",
        "publishedAt": "2022-08-30T05:16:00Z",
        "content": "Aug 30 (Reuters) - Who can save bitcoin?\r\nThe world's biggest cryptocurrency can't seem to catch a break. It finally looked to be regaining strength this month, breaching $25,000 for the first time s… [+3695 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "insider@insider.com (Charles Bovaird)",
        "title": "Bitcoin mining powers the system that oversees transactions and creates new bitcoins",
        "description": "Bitcoin mining is the way transactions using the cryptocurrency are validated and how new bitcoins are added into circulation.",
        "url": "https://www.businessinsider.com/personal-finance/bitcoin-mining",
        "urlToImage": "https://i.insider.com/61a0feca1ca5280018115d58?width=1200&format=jpeg",
        "publishedAt": "2022-08-30T20:19:08Z",
        "content": "Bitcoin mining is a crucial part of the cryptocurrency's underlying technology through which transactions are verified and added to the digital ledger known as blockchain. The owners and operators of… [+7864 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "insider@insider.com (Sam Becker)",
        "title": "Shorting cryptocurrency is a high-risk, advanced investing strategy. Here's how it works",
        "description": "Investors can short cryptocurrencies like Bitcoin, but high volatility and lack of crypto regulation make it particularly risky.",
        "url": "https://www.businessinsider.com/personal-finance/can-you-short-crypto",
        "urlToImage": "https://i.insider.com/630e13db2d6c740018c3feca?width=1200&format=jpeg",
        "publishedAt": "2022-08-30T16:35:43Z",
        "content": "When you think about investing, the idea is usually that you profit when the price of an asset increases, and lose money when it falls.\r\nAnother, more-advanced approach is short-selling, or shorting.… [+8172 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "prosen@insider.com (Phil Rosen)",
        "title": "Ethereum Merge Explained: Experts break down the risks of the long-awaited crypto update",
        "description": "Blockchain experts call Ethereum's merge the most important event in crypto history, after the creation of ether and bitcoin.",
        "url": "https://markets.businessinsider.com/news/currencies/ethereum-merge-explained-blockchain-update-cryptocurrency-bitcoin-crypto-eth-vitalik-2022-9",
        "urlToImage": "https://i.insider.com/631f2d2b89d2b3001894999b?width=1200&format=jpeg",
        "publishedAt": "2022-09-12T15:18:09Z",
        "content": "The long-awaited Ethereum merge event is set to happen around Thursday, according to the Ethereum Foundation, and experts say it will reduce the blockchain's energy consumption by 99%. \r\nThe update, … [+4117 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "insider@insider.com (Davíd Lavie)",
        "title": "Bitcoin halving is how the supply of the world's largest cryptocurrency is controlled",
        "description": "Bitcoin halving is when the rate of new bitcoins entering circulation is cut in half, which occurs approximately every four years.",
        "url": "https://www.businessinsider.com/personal-finance/bitcoin-halving",
        "urlToImage": "https://i.insider.com/619d45c2d2fd62001820b8d0?width=1200&format=jpeg",
        "publishedAt": "2022-08-16T16:59:51Z",
        "content": "Despite its somewhat nebulous-seeming nature, Bitcoin is a finite resource. There will only ever be 21 million Bitcoin. So far, 19 million have already been mined, meaning there's just two million Bi… [+6317 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "insider@insider.com (Leslie Quander Wooldridge)",
        "title": "A bitcoin IRA lets you profit from the cryptocurrency's potential gains in a tax-advantaged way",
        "description": "A bitcoin IRA is a self-directed individual retirement account allowed to hold cryptocurrencies. They have high fees but allow tax-advantaged profits.",
        "url": "https://www.businessinsider.com/personal-finance/what-is-a-bitcoin-ira",
        "urlToImage": "https://i.insider.com/600f7cb667a6bc0019d9af3c?width=1200&format=jpeg",
        "publishedAt": "2022-08-26T17:24:32Z",
        "content": "Not a day goes by without bitcoin being in the news. And given the cryptocurrency's phenomenal price rise, from zero to approximately $32,000 in a little over a decade, you like many other individual… [+8011 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Slashdot.org"
        },
        "author": "EditorDavid",
        "title": "'El Salvador Had a Bitcoin Revolution. Hardly Anybody Showed Up'",
        "description": "It's the one-year anniversary of El Salvador's adopting Bitcoin as a legal tender, so Bloomberg follows up, finding a country where \"Adoption has moved slowly, and steep declines in Bitcoin's price from those lofty levels last fall have dampened the early eup…",
        "url": "https://slashdot.org/story/22/09/03/181210/el-salvador-had-a-bitcoin-revolution-hardly-anybody-showed-up",
        "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
        "publishedAt": "2022-09-03T18:34:00Z",
        "content": "It's the one-year anniversary of El Salvador's adopting Bitcoin as a legal tender, so Bloomberg follows up, finding a country where \"Adoption has moved slowly, and steep declines in Bitcoin's price f… [+3104 chars]"
      },
      {
        "source": {
          "id": "reuters",
          "name": "Reuters"
        },
        "author": null,
        "title": "Canada's Conservatives set to embrace populist to take on Trudeau - Reuters.com",
        "description": "Canada's Conservatives next month look set to embrace a career politician who has promised to fire the central bank governor and promoted bitcoin as an inflation hedge to become its fourth leader since 2020.",
        "url": "https://www.reuters.com/world/americas/canadas-conservatives-set-embrace-populist-take-trudeau-2022-09-01/",
        "urlToImage": "https://www.reuters.com/resizer/K_JCHc1HxwcHb7GniCvJbQe2vpI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/I3H2EGP35RO5PC5YH6GHL7NDBY.jpg",
        "publishedAt": "2022-09-01T10:04:00Z",
        "content": "OTTAWA, Sept 1 (Reuters) - Canada's Conservatives next month look set to embrace a career politician who has promised to fire the central bank governor and promoted bitcoin as an inflation hedge to b… [+3160 chars]"
      },
      {
        "source": {
          "id": "reuters",
          "name": "Reuters"
        },
        "author": null,
        "title": "Lawyer of alleged crypto launderer urges Russia to discuss prisoner swap - letter - Reuters",
        "description": "The lawyer of a Russian man accused of laundering more than $4 billion through the digital currency bitcoin urged Moscow on Monday to begin negotiations with the United States to include his client in a potential prisoner swap.",
        "url": "https://www.reuters.com/world/europe/lawyer-alleged-crypto-launderer-urges-russia-discuss-prisoner-swap-letter-2022-09-05/",
        "urlToImage": "https://www.reuters.com/resizer/ibTu9Ia1Og3Fyo5MFwGwsUetBcw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/R7M3WV7F4ZOSFGXHLJJRLKQ6MA.jpg",
        "publishedAt": "2022-09-05T19:17:00Z",
        "content": "MOSCOW, Sept 5 (Reuters) - The lawyer of a Russian man accused of laundering more than $4 billion through the digital currency bitcoin urged Moscow on Monday to begin negotiations with the United Sta… [+2472 chars]"
      },
      {
        "source": {
          "id": "reuters",
          "name": "Reuters"
        },
        "author": null,
        "title": "Analysis: Rebounding real yields spell trouble for U.S. stocks - Reuters.com",
        "description": "Expectations of more jumbo rate hikes from the Federal Reserve are pushing up real yields in the United States, putting pressure on everything from technology shares and meme stocks to bitcoin.",
        "url": "https://www.reuters.com/markets/europe/rebounding-real-yields-spell-trouble-us-stocks-2022-09-08/",
        "urlToImage": "https://www.reuters.com/resizer/gHOyfDz6AP4hPd4Sx3kN1our9Fo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/54C37NC4XJMTREHGZZJHA5LZII.jpg",
        "publishedAt": "2022-09-08T16:09:00Z",
        "content": "NEW YORK, Sept 8 (Reuters) - Expectations of more jumbo rate hikes from the Federal Reserve are pushing up real yields in the United States, putting pressure on everything from technology shares and … [+4484 chars]"
      },
      {
        "source": {
          "id": "reuters",
          "name": "Reuters"
        },
        "author": null,
        "title": "Canada's Conservatives pick populist in bid to oust Trudeau's Liberals - Reuters Canada",
        "description": "Canada's Conservatives on Saturday picked Pierre Poilievre, a veteran parliamentarian who has promoted bitcoin as way to fight inflation, to spearhead the party's bid to oust the Liberals and Prime Minister Justin Trudeau.",
        "url": "https://www.reuters.com/world/americas/canadas-conservatives-pick-populist-bid-oust-trudeaus-liberals-2022-09-11/",
        "urlToImage": "https://www.reuters.com/resizer/GMi2DmFNwMH3VPq_aXUIi78kV6Q=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/H5KL4DXQKBJ4HCOMXQJPP73TDA.jpg",
        "publishedAt": "2022-09-11T00:10:00Z",
        "content": "OTTAWA, Sept 10 (Reuters) - Canada's Conservatives on Saturday picked Pierre Poilievre, a veteran parliamentarian who has promoted bitcoin as way to fight inflation, to spearhead the party's bid to o… [+2956 chars]"
      },
      {
        "source": {
          "id": "reuters",
          "name": "Reuters"
        },
        "author": null,
        "title": "NFT sales are hot! But what exactly is for sale? - Reuters.com",
        "description": "NFTs, or non-fungible tokens, represent ownership interests in digital assets. Each NFT is unique, as distinct from fungible assets such as U.S. currency, Bitcoin or Ethereum, and created on a blockchain (by \"minting\").",
        "url": "https://www.reuters.com/legal/legalindustry/nft-sales-are-hot-what-exactly-is-sale-2022-09-13/",
        "urlToImage": "https://www.reuters.com/resizer/-og-OKQnJGVdl74n14DbRgeF63I=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ZR2FRT4V5JD2XMKOH4EXX7D5TU.JPG",
        "publishedAt": "2022-09-13T14:46:00Z",
        "content": "September 13, 2022 - NFTs, or non-fungible tokens, represent ownership interests in digital assets. Each NFT is unique, as distinct from fungible assets such as U.S. currency, Bitcoin or Ethereum, an… [+7706 chars]"
      },
      {
        "source": {
          "id": "reuters",
          "name": "Reuters"
        },
        "author": "Reuters Editorial",
        "title": "Crypto Weekly: something in the Ether - Reuters",
        "description": "From why ether is gaining ground on bitcoin, to an unhappy crypto anniversary in El Salvador, we round up the week's big stories in the world of alternative currencies. Olivia Zollino reports.",
        "url": "https://www.reuters.com/video/watch/idOV496413092022RP1",
        "urlToImage": "https://static.reuters.com/resources/r/?d=20220913&i=OV496413092022RP1&r=OV496413092022RP1&t=2",
        "publishedAt": "2022-09-13T17:25:35Z",
        "content": "Posted \r\nFrom why ether is gaining ground on bitcoin, to an unhappy crypto anniversary in El Salvador, we round up the week's big stories in the world of alternative currencies. Olivia Zollino report… [+1 chars]"
      },
      {
        "source": {
          "id": "reuters",
          "name": "Reuters"
        },
        "author": null,
        "title": "Valereum to end bitcoin mining to focus on Gibraltar exchange - Reuters",
        "description": "Blockchain company Valereum <a href=\"https://www.reuters.com/companies/6TJ.SG\" target=\"_blank\">(6TJ.SG)</a> said on Thursday it was selling its bitcoin mining assets to Vinanz Ltd for a 24% stake in the company as part of plans to acquire and expand the Gibra…",
        "url": "https://www.reuters.com/technology/valereum-end-bitcoin-mining-focus-gibraltar-exchange-2022-08-18/",
        "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=108",
        "publishedAt": "2022-08-18T10:56:00Z",
        "content": "LONDON, Aug 18 (Reuters) - Blockchain company Valereum (6TJ.SG) said on Thursday it was selling its bitcoin mining assets to Vinanz Ltd for a 24% stake in the company as part of plans to acquire and … [+1577 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Entrepreneur"
        },
        "author": "Jea Yu",
        "title": "Forget Bitcoin, Block’s Ecosystems are the Real Growth Drivers",
        "description": "It’s been a tough year for payments platform fintech Block (NYSE: SQ) stock as it trades down (-58%) on the year. The old adage, “it’s better to have had and",
        "url": "https://www.entrepreneur.com/article/434756",
        "urlToImage": "https://assets.entrepreneur.com/providers/marketbeat/hero-image-marketbeat-434756.jpeg",
        "publishedAt": "2022-09-06T06:00:00Z",
        "content": "It's been a tough year for payments platform fintech Block (NYSE: SQ) stock as it trades down (-58%) on the year. The old adage, \"it's better to have had and lost, than to never had it at all\" is wha… [+7299 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "tmohamed@businessinsider.com (Theron Mohamed)",
        "title": "'Rich Dad Poor Dad' author Robert Kiyosaki warns of an imminent market crash - and says downturns are the best times to get rich",
        "description": "The personal-finance guru predicted stocks, bitcoin, and other assets would plunge in price, and urged investors to pounce on the bargains that emerge.",
        "url": "https://markets.businessinsider.com/news/stocks/robert-kiyosaki-rich-poor-dad-market-crash-stocks-bitcoin-bargains-2022-8",
        "urlToImage": "https://i.insider.com/5e8fb6e7dcd88c0adb5ccd65?width=1200&format=jpeg",
        "publishedAt": "2022-08-30T11:28:27Z",
        "content": "Robert Kiyosaki rang the alarm on an imminent market crash, and urged investors to pounce on the bargains that emerge, in a pair of recent tweets.\r\n\"All markets crashing: real estate, stocks, gold, s… [+1611 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "insider@insider.com (Carla Mozée)",
        "title": "Bitcoin jumps more than 10% as risk appetite ramps up on a pullback in the US dollar from 20-year highs",
        "description": "Bitcoin bounced above $21,000 for the first time in two weeks, helping the broader crypto market recapture a valuation of more than $1 trillion.",
        "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-today-cryptocurrencies-stocks-us-dollar-crypto-markets-ethereum-2022-9",
        "urlToImage": "https://i.insider.com/62faacfff16a0d0018e69ae1?width=1200&format=jpeg",
        "publishedAt": "2022-09-09T19:07:59Z",
        "content": "Bitcoin leapt to a two-week high Friday as a drop in the strong US dollar helped fuel a jump in stocks and other risk assets. \r\nBitcoin gained as much as 13% to $21,375.38, the first time the price h… [+2116 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "tmohamed@businessinsider.com (Theron Mohamed)",
        "title": "'Rich Dad Poor Dad' author Robert Kiyosaki says a historic market crash is looming - and touts crypto as the best defense",
        "description": "The personal-finance guru, who dismissed bitcoin as worthless in May, said it was vital for investors to get into crypto before the crash.",
        "url": "https://markets.businessinsider.com/news/stocks/rich-poor-dad-kiyosaki-stock-market-crash-dollar-crypto-bitcoin-2022-9",
        "urlToImage": "https://i.insider.com/5e2b32d662fa813e064000cb?width=1200&format=jpeg",
        "publishedAt": "2022-09-13T07:33:43Z",
        "content": "Investors are barreling towards a catastrophic market collapse, and should buy cryptocurrencies before they usurp the US dollar and transform the entire financial system, Robert Kiyosaki told his fol… [+1736 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "The Guardian"
        },
        "author": "Dan Milmo Global technology editor",
        "title": "Ethereum cryptocurrency completes move to cut CO2 output by 99%",
        "description": "Software upgrade, known as ‘the merge’ will change how transactions are managed on its blockchainEthereum, the second largest cryptocurrency, has completed a plan to to reduce its carbon emissions by more than 99%.The software upgrade, known as “the merge”, w…",
        "url": "https://amp.theguardian.com/technology/2022/sep/15/ethereum-cryptocurrency-completes-move-to-cut-co2-output-by-99",
        "urlToImage": "https://i.guim.co.uk/img/media/b94312783bf87528ee069787516942236ff75cc9/0_478_3299_1978/master/3299.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=5bebfe1763b93be825fc689aae2b8ed8",
        "publishedAt": "2022-09-15T09:27:53Z",
        "content": "Ethereum, the second largest cryptocurrency, has completed a plan to to reduce its carbon emissions by more than 99%.\r\nThe software upgrade, known as the merge, will change how transactions are manag… [+2826 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Entrepreneur"
        },
        "author": "Jea Yu",
        "title": "Is it Time to Throw in the Towel On Coinbase Stock?",
        "description": "Cryptocurrency trading marketplace Coinbase (NASDAQ: COIN) stock triggered a short squeeze on its horrendous Q2 2022 earnings report.",
        "url": "https://www.entrepreneur.com/article/433472",
        "urlToImage": "https://assets.entrepreneur.com/providers/marketbeat/hero-image-marketbeat-433472.jpeg",
        "publishedAt": "2022-08-16T05:00:00Z",
        "content": "Cryptocurrency trading marketplace Coinbase (NASDAQ: COIN) stock triggered a short squeeze on its horrendous Q2 2022 earnings report. Shares are still down (-66%) for the year even after more than do… [+5677 chars]"
      },
      {
        "source": {
          "id": "reuters",
          "name": "Reuters"
        },
        "author": null,
        "title": "Breakingviews - Crypto fans still live in a supervised world - Reuters",
        "description": "Since the dawn of history, the person with the bigger stick could easily take the person with the smaller stick’s money. That, at least, is one of many philosophies espoused by MicroStrategy <a href=\"https://www.reuters.com/companies/MSTR.O\" target=\"_blank\">(…",
        "url": "https://www.reuters.com/breakingviews/crypto-fans-still-live-supervised-world-2022-09-01/",
        "urlToImage": "https://www.reuters.com/resizer/vOy11V_wY64gU_q3EqbuYOnSCs8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/VM4CIQY7UFOWRNC6OYATOIQLK4.jpg",
        "publishedAt": "2022-09-01T15:13:00Z",
        "content": "NEW YORK, Sept 1 (Reuters Breakingviews) - Since the dawn of history, the person with the bigger stick could easily take the person with the smaller sticks money. That, at least, is one of many philo… [+1810 chars]"
      },
      {
        "source": {
          "id": "reuters",
          "name": "Reuters"
        },
        "author": null,
        "title": "Crypto lender Celsius gets court sign-off to sell bitcoin, but not stocks or debt - Reuters",
        "description": "Crypto lender Celsius Network LLC got signoff on Tuesday from a U.S. bankruptcy judge to mine and sell bitcoins during its bankruptcy.",
        "url": "https://www.reuters.com/legal/litigation/crypto-lender-celsius-gets-court-sign-off-sell-bitcoin-not-stocks-or-debt-2022-08-16/",
        "urlToImage": "https://www.reuters.com/resizer/M5_3h5HYQWktCbzkYCoKvSuEJBs=/728x381/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/KK6EBWEIDBOHZJJDF3XGYIPGWY.jpg",
        "publishedAt": "2022-08-16T22:51:00Z",
        "content": "(Reuters) - Crypto lender Celsius Network LLC got signoff on Tuesday from a U.S. bankruptcy judge to mine and sell bitcoins during its bankruptcy.\r\nChief U.S. Bankruptcy Judge Martin Glenn in Manhatt… [+3139 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "The Guardian"
        },
        "author": "Wilfred Chan",
        "title": "When bitcoin plunges, Buttcoin cheers: the online community praying for crypto’s death",
        "description": "A Reddit subforum for people who are horrified by the proliferation of crypto scams and pyramid schemes pokes fun at cryptocurrencyAs bitcoin plunged below $20,000 in mid-June, many cryptocurrency users were distraught over massive losses – with some reportin…",
        "url": "https://amp.theguardian.com/technology/2022/sep/09/bitcoin-buttcoin-online-community-praying-for-cryptos-death",
        "urlToImage": "https://i.guim.co.uk/img/media/99851280856d77238a9821994ddf0e3e55667603/0_201_4256_2554/master/4256.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=cc0b1a897f0762e211d0e2727d1ecd28",
        "publishedAt": "2022-09-09T05:00:24Z",
        "content": "As bitcoin plunged below $20,000 in mid-June, many cryptocurrency users were distraught over massive losses with some reporting they had lost their life savings. But one corner of the internet was ch… [+7205 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Slashdot.org"
        },
        "author": "msmash",
        "title": "As Crypto Crashed, Coinbase Stopped Some Notifications",
        "description": "An anonymous reader shares a report:Back in November 2021, cryptocurrencies, which saw a huge surge during most of the pandemic, suddenly began to nosedive. Joe Hovde, a New York-based data scientist, decided that this might be his moment to buy into crypto: …",
        "url": "https://slashdot.org/story/22/08/15/1539221/as-crypto-crashed-coinbase-stopped-some-notifications",
        "urlToImage": "https://a.fsdn.com/sd/topics/business_64.png",
        "publishedAt": "2022-08-15T16:41:00Z",
        "content": "Back in November 2021, cryptocurrencies, which saw a huge surge during most of the pandemic, suddenly began to nosedive. Joe Hovde, a New York-based data scientist, decided that this might be his mom… [+1641 chars]"
      },
      {
        "source": {
          "id": "wired",
          "name": "Wired"
        },
        "author": "Luke Burgis",
        "title": "The Three-City Problem of Modern Life",
        "description": "What does Athens have to do with Jerusalem—and what do either have to do with Silicon Valley?",
        "url": "https://www.wired.com/story/technology-philosophy-three-city-problem/",
        "urlToImage": "https://media.wired.com/photos/630931d752512a466ff8f66d/191:100/w_1280,c_limit/three-cities.jpg",
        "publishedAt": "2022-08-28T11:00:00Z",
        "content": "But today there is a third city affecting the other two. Silicon Valley, this third city, is not governed primarily by reason (it is practically the mark of a great entrepreneur to not be reasonable)… [+3708 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "The Guardian"
        },
        "author": "Alex Hern",
        "title": "How a major change to ethereum could split users – and cryptocurrency – forever",
        "description": "Ethereum turning off its mining rigs and slashing the currency’s carbon emissions should be good news. But not everyone agrees<ul><li>Don’t get TechScape delivered to your inbox? Sign up here</li></ul>On 15 September, the ethereum blockchain is planning to sw…",
        "url": "https://amp.theguardian.com/technology/2022/aug/24/techscape-ethereum-proof-of-work",
        "urlToImage": "https://i.guim.co.uk/img/media/49ca6967922a4ad467e3fab922346f4b9c7c3308/0_63_4500_2702/master/4500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=45c077940a79d1698425f6a726b815fd",
        "publishedAt": "2022-08-24T10:45:33Z",
        "content": "On 15 September, the ethereum blockchain is planning to switch off its mining rigs. If it happens, it should reduce the carbon emissions of the entire ethereum ecosystem by orders of magnitude overni… [+8773 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "prosen@insider.com (Phil Rosen)",
        "title": "Bitcoin sees its steepest decline in a month as hopes fade for a less hawkish Fed",
        "description": "Bitcoin's 8% dive on Friday dragged the broader crypto market lower as traders digested hawkish hints from the Fed.",
        "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-today-worlds-biggest-crypto-hawkish-fed-rate-hikes-2022-8",
        "urlToImage": "https://i.insider.com/62ff855ff1df7e0018eb481b?width=1200&format=jpeg",
        "publishedAt": "2022-08-19T13:06:51Z",
        "content": "Bitcoin slumped about 8% Friday as markets and investors took in Fed comments that suggested a dovish pivot remained unlikely to happen soon.\r\nThe crypto traded at $21,438 Friday at 8:30 a.m. ET, and… [+1514 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "prosen@insider.com (Phil Rosen)",
        "title": "Ethereum Merge nears final countdown as bitcoin and ether inch higher",
        "description": "The Ethereum Foundation has said the highly anticipated merge event is set to begin sometime around Wednesday or Thursday.",
        "url": "https://markets.businessinsider.com/news/currencies/ethereum-merge-final-countdown-bitcoin-price-btc-ether-price-eth-2022-9",
        "urlToImage": "https://i.insider.com/6321dd80d5916b0019abaa3e?width=1200&format=jpeg",
        "publishedAt": "2022-09-14T14:23:37Z",
        "content": "Ethereum's merge event is set to happen around Wednesday or Thursday, according to the Ethereum Foundation. \r\nAfter selling off roughly 10% on Tuesday following the August inflation data, prices for … [+1346 chars]"
      },
      {
        "source": {
          "id": "reuters",
          "name": "Reuters"
        },
        "author": null,
        "title": "Central African Republic top court blocks purchases with new cryptocurrency - Reuters",
        "description": "Central African Republic's Constitutional Court on Monday ruled that the purchase of citizenship, \"e-residency\" and land using a cryptocurrency the government launched last month was unconstitutional.",
        "url": "https://www.reuters.com/technology/central-african-republic-top-court-blocks-purchases-with-new-cryptocurrency-2022-08-29/",
        "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=108",
        "publishedAt": "2022-08-29T18:10:00Z",
        "content": "BANGUI, Aug 29 (Reuters) - Central African Republic's Constitutional Court on Monday ruled that the purchase of citizenship, \"e-residency\" and land using a cryptocurrency the government launched last… [+1894 chars]"
      },
      {
        "source": {
          "id": "reuters",
          "name": "Reuters"
        },
        "author": null,
        "title": "Cboe says Robinhood and Virtu among potential equity partners in crypto exchange - Reuters",
        "description": "Cboe Global Markets Inc <a href=\"https://www.reuters.com/companies/CBOE.Z\" target=\"_blank\">(CBOE.Z)</a> on Thursday said it is in discussions with several market participants, including retail brokers and market makers, about taking strategic stakes in its re…",
        "url": "https://www.reuters.com/markets/us/cboe-says-robinhood-virtu-among-potential-equity-partners-crypto-exchange-2022-08-25/",
        "urlToImage": "https://www.reuters.com/resizer/J31baCTB_IftW3k-DDBr1yQ5gyk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/3XXXH6VWAFKLNABL34EO572H2U.jpg",
        "publishedAt": "2022-08-25T15:00:00Z",
        "content": "Aug 25 (Reuters) - Cboe Global Markets Inc (CBOE.Z) on Thursday said it is in discussions with several market participants, including retail brokers and market makers, about taking strategic stakes i… [+1608 chars]"
      },
      {
        "source": {
          "id": "time",
          "name": "Time"
        },
        "author": "Allyson Versprille / Bloomberg",
        "title": "Crypto Mining Could Hurt Climate Progress, New White House Report Says",
        "description": "The White House says the environmental impact of producing cryptocurrencies like Bitcoin could impede US efforts to combat climate change.",
        "url": "https://time.com/6211780/crypto-mining-climate-white-house/",
        "urlToImage": "https://api.time.com/wp-content/uploads/2022/09/crypto-mining-climate-white-house.jpg?quality=85&w=1200&h=628&crop=1",
        "publishedAt": "2022-09-08T17:54:00Z",
        "content": "The White House says the environmental impact of producing cryptocurrencies like Bitcoin could impede U.S. efforts to combat climate change.\r\nThe conclusion thrusts the Biden administration into the … [+3103 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "CNET"
        },
        "author": "Daniel Van Boom",
        "title": "The Ethereum Merge is Imminent. Here's Why It Matters - CNET",
        "description": "The Merge will see the second biggest blockchain, ethereum, adopt a proof of stake model. It's estimated to reduce the blockchain's energy use by over 99%.",
        "url": "https://www.cnet.com/personal-finance/crypto/the-ethereum-merge-is-imminent-heres-why-it-matters/",
        "urlToImage": "https://www.cnet.com/a/img/resize/7fb2e9ef7ecae570febaefcae5a499daf61e4530/hub/2022/07/14/70fe602c-0eca-4060-9e47-2375450b2ad9/gettyimages-1241390930.jpg?auto=webp&fit=crop&height=630&width=1200",
        "publishedAt": "2022-09-14T23:37:00Z",
        "content": "If you Google \"Ethereum Merge,\"you'll see a charming countdown clock depicting two pandas, one black and one white, slowly getting closer to each other. When the countdown hits zero, six hours from t… [+11176 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "CNET"
        },
        "author": "Daniel Van Boom",
        "title": "Countdown to Ethereum Merge: What It Is and Why It's Important - CNET",
        "description": "Described as among the most important days in crypto, the ethereum blockchain this week adopts proof of stake -- lowering its carbon footprint by 99%.",
        "url": "https://www.cnet.com/personal-finance/crypto/countdown-to-ethereum-merge-what-it-is-and-why-its-important/",
        "urlToImage": "https://www.cnet.com/a/img/resize/e20cf953a1e584b3e9442bad7df0fd8dcd60d147/2022/07/14/70fe602c-0eca-4060-9e47-2375450b2ad9/gettyimages-1241390930.jpg?auto=webp&fit=crop&height=630&width=1200",
        "publishedAt": "2022-09-13T00:49:00Z",
        "content": "Google \"Ethereum Merge\" and you'll see a cute countdown clock depicting two pandas, one black and one white, slowly getting closer to each other. When the countdown hits zero some time on Sept. 14, t… [+11594 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "ztayeb@businessinsider.com (Zahra Tayeb)",
        "title": "Anthony Scaramucci says bear markets 'suck,' and Skybridge only took Sam-Bankman Fried's deal because of its 'mediocre' performance",
        "description": "Sam Bankman-Fried's acquisition of SkyBridge Capital means \"people don't think you're going out of business,\" Scaramucci said.",
        "url": "https://www.businessinsider.com/scaramucci-says-bear-markets-suck-sbf-deal-mediocre-performance-2022-9",
        "urlToImage": "https://i.insider.com/61a107831ca5280018116047?width=1200&format=jpeg",
        "publishedAt": "2022-09-13T11:35:03Z",
        "content": "Hedge fund manager Anthony Scaramucci lamented bear markets, saying they \"suck\" because of how much they've hurt his business. \r\nScaramucci told the Financial Times Monday that his company, SkyBridge… [+2159 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "ztayeb@businessinsider.com (Zahra Tayeb)",
        "title": "Anthony Scaramucci says bear markets 'suck,' and Skybridge only took Sam-Bankman Fried's deal because of its 'mediocre' performance",
        "description": "Sam Bankman-Fried's acquisition of SkyBridge Capital means \"people don't think you're going out of business,\" Scaramucci said.",
        "url": "https://markets.businessinsider.com/news/currencies/scaramucci-says-bear-markets-suck-sbf-deal-mediocre-performance-2022-9",
        "urlToImage": "https://i.insider.com/61a107831ca5280018116047?width=1200&format=jpeg",
        "publishedAt": "2022-09-13T11:35:03Z",
        "content": "Hedge fund manager Anthony Scaramucci lamented bear markets, saying they \"suck\" because of how much they've hurt his business. \r\nScaramucci told the Financial Times his company, SkyBridge Capital has… [+2164 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "gglover@insider.com (George Glover)",
        "title": "MicroStrategy's Michael Saylor accused of dodging $25 million in DC tax after he showed off his luxury penthouse flat on Facebook",
        "description": "The District of Columbia's AG alleges Michael Saylor dodged $25 million in district taxes by claiming he lived in Florida, which has no state income tax.",
        "url": "https://markets.businessinsider.com/news/currencies/michael-saylor-microstrategy-bitcoin-tax-evasion-facebook-posts-penthouse-flat-2022-9",
        "urlToImage": "https://i.insider.com/62aa092a8eacc300192dd540?width=1200&format=jpeg",
        "publishedAt": "2022-09-01T09:51:16Z",
        "content": "MicroStrategy co-founder Michael Saylor has been hit with a lawsuit by the District of Columbia's attorney-general for allegedly evading more than $25 million in income taxes.\r\nThe lawsuit published … [+2689 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "mfox@businessinsider.com (Matthew Fox)",
        "title": "Dow jumps more than 300 points as US stocks break 3-week losing streak after dollar falls from recent highs",
        "description": "Even small moves lower in both the US dollar and Treasury yields could have a big impact on different asset classes, according to Fairlead Strategies.",
        "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-dow-break-losing-streak-dollar-falls-2022-9",
        "urlToImage": "https://i.insider.com/5f7b722594fce90018f7b2f4?width=1200&format=jpeg",
        "publishedAt": "2022-09-09T20:06:15Z",
        "content": "The Dow Jones Industrial Average soared more than 300 points on Friday, cementing a three-day rally and breaking a three-week losing streak as both the US dollar and Treasury yields took a breather f… [+2113 chars]"
      },
      {
        "source": {
          "id": "reuters",
          "name": "Reuters"
        },
        "author": null,
        "title": "Ethereum blockchain has completed major software upgrade, co-founder says - Reuters",
        "description": "A major software upgrade to the Ethereum blockchain aimed at drastically reducing its energy usage has been completed, Vitalik Buterin, Ethereum inventor and co-founder tweeted on Thursday.",
        "url": "https://www.reuters.com/technology/ethereum-blockchain-has-completed-major-software-upgrade-co-founder-says-2022-09-15/",
        "urlToImage": "https://www.reuters.com/resizer/F81Dp-auWz2ULsuNYWSA54O0MI8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/QMGLSVUGONLBVKM52FOAB3NOLY.jpg",
        "publishedAt": "2022-09-15T07:11:00Z",
        "content": "Sept 15 (Reuters) - A major software upgrade to the Ethereum blockchain aimed at drastically reducing its energy usage has been completed, Vitalik Buterin, Ethereum inventor and co-founder tweeted on… [+703 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "VentureBeat"
        },
        "author": "Josh Drake, DFINITY",
        "title": "Jack Dorsey’s ‘Web5’ is a solution to a problem that’s already been solved",
        "description": "Jack Dorsey is pushing Web5, his decentralized data and identity platform. But decentralized identity tools already exist for Web3.",
        "url": "https://venturebeat.com/data-infrastructure/jack-dorseys-web5-is-a-solution-to-a-problem-thats-already-been-solved/",
        "urlToImage": "https://venturebeat.com/wp-content/uploads/2019/08/puzzle.GettyImages-1036249246.jpg?w=1200&strip=all",
        "publishedAt": "2022-09-03T16:10:00Z",
        "content": "Were you unable to attend Transform 2022? Check out all of the summit sessions in our on-demand library now! Watch here. \r\nWeb3 thrives on its ability to provide both transparency and anonymity, but … [+1428 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Gizmodo.com"
        },
        "author": "Kyle Barr",
        "title": "Crypto.com Gave a Woman a $10.5 Million Refund and Now It Wants It Back",
        "description": "What would you do if a company accidentally sent you millions in dollars you never asked for? Well, Australia-based news outlet 7News reported Tuesday that Crypto.com, one of the most high-profile crypto platforms in the world, had made an extremely expensive…",
        "url": "https://gizmodo.com/crypto-com-bitcoin-matt-damon-australia-1849478202",
        "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/492ff0ccb2b996700430d65856fc3c78.jpg",
        "publishedAt": "2022-08-31T14:40:00Z",
        "content": "What would you do if a company accidentally sent you millions in dollars you never asked for? Well, Australia-based news outlet 7News reported Tuesday that Crypto.com, one of the most high-profile cr… [+3124 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "gglover@insider.com (George Glover)",
        "title": "Ethereum Merge has completed its long-awaited update, Buterin says",
        "description": "The merge moves the Ethereum blockchain to a proof-of-stake mechanism, slashing its energy usage and so making it more appealing to institutional investors.",
        "url": "https://markets.businessinsidser.com/news/currencies/crypto-news-ethereum-finalizes-merge-upgrade-vitalik-buterin-says-bitcoin-2022-9",
        "urlToImage": "https://i.insider.com/615c3f521725d20018b7c5b8?width=1200&format=jpeg",
        "publishedAt": "2022-09-15T09:22:26Z",
        "content": "The Ethereum blockchain completed its long-awaited Merge update early Thursday morning, the crypto project's cofounder Vitalik Buterin has said.\r\nThe upgrade promises to cut energy consumption for th… [+2331 chars]"
      }





];
export default function News() {
  return (
    <div className='container'>
        <h1 style={{ fontFamily:'Copperplate Gothic bold',color: '#02289f' }}>Techify:- Top headlines</h1>
        {articles.map((articles) =>( <div className='row'>
            <div className="col-md-3 mx-4" key={articles.url} >
            <NewsItem title={articles.title.slice(0,45) } desc= {articles.description.slice(0,88)} pic={articles.urlToImage} url={articles.url} />
        </div>
        </div>
        )
        
        
        
        )}



    </div>
  )
}
