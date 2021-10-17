import * as React from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { breadcrumbList, BreadcrumbListItem } from "../constants/json-ld"
import { useSiteMetadata } from "../hooks/use-site-metadata"

type SEOProps = {
  title?: string
  description?: string
  pathname?: string
  image?: string
  noIndex?: boolean
  breadcrumbListItems?: BreadcrumbListItem[]
}

/* istanbul ignore next */

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  pathname,
  image,
  noIndex = false,
  breadcrumbListItems = [],
  children,
}) => {
  const { href } = useLocation()
  const { siteTitle, siteTitleDefault, siteUrl, siteDescription, siteImage, twitter } = useSiteMetadata()

  const seo = {
    title: title || siteTitleDefault,
    description: description || siteDescription,
    url: pathname ? `${siteUrl}${pathname}` : href,
    image: `${siteUrl}${image || siteImage}`,
  }

  return (
    <Helmet title={title} defaultTitle={siteTitleDefault} titleTemplate={`%s | ${siteTitle}`}>
      <html lang="en-US" />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <link rel="canonical" href={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:type" content="website" />
      <meta property="og:see_also" content="https://www.linkedin.com/in/amankalra172/" />
      <meta property="og:see_also" content="https://twitter.com/amankalra172" />
      <meta property="og:see_also" content="https://github.com/amankalra172" />
      <meta property="og:see_also" content="https://medium.com/thestorii" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={twitter} />
      <meta name="creator" content="AmanKalra" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <meta name="msapplication-TileColor" content="#0f172a" />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      {breadcrumbListItems.length >= 1 && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbList(breadcrumbListItems))}</script>
      )}
      {children}
    </Helmet>
  )
}
