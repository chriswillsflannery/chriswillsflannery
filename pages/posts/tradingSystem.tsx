import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';
import { HL } from 'components/HorizontalLine';
import system from '@/public/tradingSystem/system.png';
import styles from '@/styles/Home.module.css';

const ChatMessage = () => {
    return (
      <div style={{
        maxWidth: '800px',
      }}>
        <div style={{
          display: 'flex',
          marginBottom: '20px'
        }}>
          <div style={{ flex: 1 }}>
            <div style={{
              borderRadius: '12px',
              padding: '16px',
              marginBottom: '8px'
            }}>
              <pre style={{
                margin: 0,
                whiteSpace: 'pre-wrap',
                fontFamily: '"Courier New", Courier, monospace',
                fontSize: '14px'
              }}>
                {`Help me to design a system that processes real-time market data and generates trading signals.
  
  Keep in mind that valuable trading signals are not necessarily derived entirely from market data - key elements might involve, for example, a private dataset of the user's historical trades to determine risk tolerance, or alternative data sources like social media trends.
  
  Keep in mind that a customer may not necessarily want to consume the generated trading signals in a visual web application. The output should be platform agnostic. For example, the end user might want to consume the information in the form of a podcast, or an email.
  
  You should provide a high-level architecture including technologies. Any processing should happen in AWS. 
  
  You should generate an artifact showing the visual system design/architecture using mermaid graph syntax.`}
              </pre>
            </div>
            <div style={{
              fontSize: '12px',
              color: '#666',
              paddingLeft: '8px'
            }}>
              sent at 10:30 AM
            </div>
          </div>
        </div>
      </div>
    );
  };

  const LLMResponse = () => {
    return (
      <div style={{
        maxWidth: '800px',
    }}>
        <div style={{
          display: 'flex',
          marginBottom: '20px'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#efe9ff',
            marginRight: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span style={{ 
              fontSize: '24px',
              color: '#6b4fbb'
            }}>◆</span>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{
              backgroundColor: '#fcfaff',
              borderRadius: '12px',
              padding: '16px',
              marginBottom: '8px',
              color: '#1a1a1a',
              fontSize: '15px',
              lineHeight: '1.6',
              fontWeight: '400'
            }}>
              {`I'll help design a scalable system for processing market data and generating customizable trading signals.`}
            </div>
            <div style={{
              fontSize: '12px',
              color: '#666',
              paddingLeft: '8px'
            }}>
              sent at 10:31 AM
            </div>
          </div>
        </div>
      </div>
    );
  };

const TradingSystem: NextPage = () => {
    
  return (
    <div className={styles.container}>
      <Head>
        <title>ChrisWF.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.articleMain}>

        <ChatMessage />

        <LLMResponse />

        <Image
            src={system}
            alt="system"
            priority
            className={styles.image}
        />

        <div style={{ maxWidth: '800px'}}>
            <p>
                {`
Claude made some interesting choices here.
We have our real  time market data feed and alternative data feed from social media.
Kinesis Data Streams and Data Firehose are both real-time analysis tools.
I would have actually expected some kind of a suggestion for web scraping of the social media stuff, but I guess
Claude isn't really giving us suggestions for *Getting* the data so much as just assuming we already have streaming sources.                    
                `}
            </p>
            <p>
                {`
User historical data stored in S3 and processed with Glue ETL, which makes sense if we want to clean/process/chunk that data.
Glue ETL is only useful for data prep though, if we wanted to created vector embeddings ie. for RAG we would need an additional Lambda or similar serverless process to work with a vector DB.
Maybe this could be done in the EMR layer. I haven't worked with EMR before. Claude says it's for, among other things, "feature engineering" so perhaps it's a candidate.
                `}
            </p>
            <p>
                {`
Timestream DB for market data storage and analysis, and an additional standard Postgres instance for things like user profiles, preferences, historical trading patterns, whatever.
Maybe use pgVector here for the vector embeddings for trading patterns.
I'm not super familiar with how pgVector stacks up against dedicated vector DBs but if you can make postgres multi-tenant and it's less overhead and works, and it's familiar, that could be good.
                `}
            </p>
            <p>
                {`
Lambda(s) get(s) spun up for signal generation based on processed data using user preferences and risk profiles from Postgres.
Generates actionable trading signals and sends to output distribution later for email, postcast gen, API gateway and websocket server. 
Claude also identified that some monitoring/security is a good idea here. Auth kinda goes without saying. Potentially highly sensitive user data.
                `}
            </p>
            <p>
                {`
Serverless components (lambda, Kinesis, EMR) can auto-scale to handle increased loads to a point.
API gateway and Websocket API can use RBAC Role based access control to grant certain users access to certain data/functionality.
                `}
            </p>
        </div>

        <HL />

      </main>

      <footer className={styles.footer}>
        <p>
          <Link href="../">
            Home
          </Link>
        </p>
      </footer>
    </div>
  )
}

export default TradingSystem
