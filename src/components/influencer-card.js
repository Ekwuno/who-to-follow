import React from "react"
import InfluencerStyles from "../styles/influencer.module.css"

export default function InfluencerCard({ influencer, children }) {
  if (!influencer) return <></>
  return (
    <article key={influencer.recordId} className={InfluencerStyles.influencer}>
      <header>
        <h3 className={InfluencerStyles.name}>
          <a
            href={"https://www.twitter.com/" + influencer.fields.handle}
            rel="noopener noreferrer"
            target="_blank"
          >
            {influencer.fields.name}
          </a>
        </h3>
        <p className={InfluencerStyles.handle}>@{influencer.fields.handle}</p>
      </header>
      <div>
        <p className={InfluencerStyles.description}>
          {influencer.fields.description}
        </p>
        <div className={InfluencerStyles.tagsList}>
          {influencer.fields.tags &&
            influencer.fields.tags.map((tag, index) => (
              <small
                className={InfluencerStyles.tag}
                key={index}
                role="button"
                tabIndex={0}
              >
                {tag}
              </small>
            ))}
        </div>
        {children && <hr />}
        {children}
      </div>
    </article>
  )
}
