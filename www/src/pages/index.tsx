import * as React from "react"
import { PageProps, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import {
  Container,
  Stack,
  Text,
  Badge,
  Box,
  Flex,
  Grid,
  Link as ChakraLink,
  usePrefersReducedMotion,
} from "@chakra-ui/react"
import { Link } from "../components/link"
import { Layout } from "../components/blocks/layout"
import { MotionBox } from "../components/blocks/motion-box"
import { FullWidthContainer } from "../components/blocks/full-width-container"
import { Spacer } from "../components/blocks/spacer"
import { SkipNavContent } from "../components/a11y/skip-nav"
import { Heading } from "../components/typography/heading"
import { PrimaryButton, SubtleButton } from "../components/buttons"
import { space } from "../constants/space"
import { SEO } from "../components/seo"
import { homepage } from "../constants/json-ld"

type DataProps = {
  posts: {
    nodes: {
      title: string
      description: string
      slug: string
    }[]
  }
  garden: {
    nodes: {
      title: string
      slug: string
    }[]
  }
  // primaryRepo: {
  //   repository: RepositoryInfo
  // }
  // secondaryRepo: {
  //   repository: RepositoryInfo
  // }
}

const cardGradients = [
  `linear(to-tr, #A774F2, #F25D76, #FF964F)`,
  `linear(to-tr, #9B7BFE, #54B5F0, #88F2A9)`,
  `linear(to-tr, #933890, #E08896, #CC98DD, #D1CEE2)`,
  `linear(to-tr, #6666DE, #5778C9, #94D1C9, #A1D8FF)`,
  `linear(to-tr, #3e206d, #af3942, #d66a38, #eacc15)`,
  `linear(to-tr, #511a2a, #cb598d, #b24ecb, #ebb8eb)`,
]

const openSourceRepos = [
  {
    name: `Getting started`,
    url: `https://loophole.cloud/blog/get-started-with-loophole`,
  },
  {
    name: `Download`,
    url: `https://loophole.cloud/download`,
  },
  {
    name: `Docs`,
    url: `https://loophole.cloud/docs`,
  },
  {
    name: `Twitter`,
    url: `https://twitter.com/loophole_cloud`,
  },
]

const Index: React.FC<PageProps<DataProps>> = ({ data }) => {
  const shouldReduceMotion = usePrefersReducedMotion()
  const [firstPost, ...rest] = data.posts.nodes
  const otherPosts = [...rest]

  // const primRepo = data.primaryRepo.repository
  // const secRepo = data.secondaryRepo.repository

  return (
    <Layout>
      <SEO>
        <script type="application/ld+json">{JSON.stringify(homepage)}</script>
      </SEO>
      <SkipNavContent>
        <FullWidthContainer variant="hero">
          <Stack align="center" spacing="5" py={space.paddingLarge}>
            <Heading as="h1">Hi, I’m Aman Kalra!</Heading>
            <Text variant="prominent" maxWidth="45ch" textAlign="center">
              <strong>Product Management Intern</strong> from Germany. <br />
              I’m passionate about products and data! Curious about its place in the businesses and future
              sustainability.
            </Text>
            <Text variant="prominent" maxWidth="40ch" textAlign="center">
              I’m currently working remotely at <ChakraLink href="https://www.main.dev">Main.Dev</ChakraLink> on the
              open source project : <ChakraLink href="https://loophole.cloud/">Loophole</ChakraLink> .
            </Text>
          </Stack>
        </FullWidthContainer>
        <FullWidthContainer variant="light">
          <Stack alignItems="flex-start" spacing={24} py={space.paddingMedium}>
            <Stack alignItems="flex-start" spacing={[6, 8]}>
              <Badge variant="light">Latest Post</Badge>
              <Box>
                <Heading as="h2">{firstPost.title}</Heading>
                <Text variant="lightContainer">{firstPost.description}</Text>
              </Box>
              <PrimaryButton to={firstPost.slug}>Continue Reading</PrimaryButton>
            </Stack>
            <Stack direction="column" width="100%" spacing={6}>
              <Flex justifyContent="space-between" alignItems="center">
                <Badge variant="light">More Posts</Badge>
                <SubtleButton to="/writing">Read all</SubtleButton>
              </Flex>
              <Grid templateColumns={[`repeat(1, 1fr)`, null, `repeat(3, 1fr)`]} gap={[4, null, 8]}>
                {otherPosts.map((item, index) => (
                  <Link
                    to={item.slug}
                    key={item.slug}
                    borderRadius="lg"
                    _hover={{ textDecoration: `none`, boxShadow: shouldReduceMotion ? `outline` : null }}
                  >
                    <MotionBox
                      bgGradient={cardGradients[index]}
                      p={4}
                      borderRadius="lg"
                      height={[`150px`, null, null, `200px`, `250px`]}
                      boxShadow="lg"
                      display="flex"
                      alignItems="flex-end"
                      color="white"
                      fontSize={[`lg`, null, `md`, `1.125rem`, `1.3125rem`]}
                      sx={{ textShadow: `0 1px 2px rgba(0, 0, 0, 0.5)` }}
                    >
                      {item.title}
                    </MotionBox>
                  </Link>
                ))}
              </Grid>
            </Stack>
            <Stack direction="column" width="100%" spacing={6}>
              <Flex justifyContent="space-between" alignItems="center">
                <Badge variant="light">Digital Garden</Badge>
                <SubtleButton to="/garden">Read all</SubtleButton>
              </Flex>
              <Grid templateColumns={[`repeat(1, 1fr)`, null, `repeat(3, 1fr)`]} gap={[4, null, 8]}>
                {data.garden.nodes.map((item, index) => (
                  <Link
                    to={item.slug}
                    key={item.slug}
                    borderRadius="lg"
                    _hover={{ textDecoration: `none`, boxShadow: shouldReduceMotion ? `outline` : null }}
                  >
                    <MotionBox
                      bgGradient={cardGradients[index + 3]}
                      p={4}
                      borderRadius="lg"
                      height={[`125px`, null, null, `175px`]}
                      boxShadow="lg"
                      display="flex"
                      alignItems="flex-end"
                      color="white"
                      fontSize={[`lg`, null, `md`, `1.125rem`, `1.3125rem`]}
                      sx={{ textShadow: `0 1px 2px rgba(0, 0, 0, 0.5)` }}
                    >
                      {item.title}
                    </MotionBox>
                  </Link>
                ))}
              </Grid>
            </Stack>
            <Stack direction="column" width="100%" spacing={6}>
              <Flex justifyContent="space-between" alignItems="center">
                <Badge variant="light">NFTs</Badge>
                <SubtleButton to="/nft">My Latest NFts</SubtleButton>
              </Flex>
              <Grid gridTemplateColumns={[`repeat(1, 1fr)`, null, `repeat(2, 1fr)`]} gap={[4, null, 8]}>
                <Link
                  to="/art/photography"
                  aria-label="View my photography"
                  borderRadius="lg"
                  _hover={{ boxShadow: shouldReduceMotion ? `outline` : null }}
                >
                  <MotionBox
                    sx={{
                      ".gatsby-image-wrapper": { borderRadius: `lg`, verticalAlign: `top` },
                      img: { borderRadius: `lg` },
                      boxShadow: `lg`,
                      height: `100%`,
                      width: `100%`,
                      borderRadius: `lg`,
                    }}
                  >
                    <StaticImage
                      src="../images/pages-index-photography-preview.jpg"
                      alt=""
                      layout="constrained"
                      quality={90}
                      formats={[`auto`, `webp`, `avif`]}
                      placeholder="blurred"
                      width={720}
                      aspectRatio={16 / 9}
                    />
                  </MotionBox>
                </Link>
                <Link
                  to="/art/3d"
                  aria-label="View my 3D art"
                  borderRadius="lg"
                  _hover={{ boxShadow: shouldReduceMotion ? `outline` : null }}
                >
                  <MotionBox
                    sx={{
                      ".gatsby-image-wrapper": { borderRadius: `lg`, verticalAlign: `top` },
                      img: { borderRadius: `lg` },
                      boxShadow: `lg`,
                      height: `100%`,
                      width: `100%`,
                      borderRadius: `lg`,
                    }}
                  >
                    <StaticImage
                      src="../images/pages-index-3d-preview.jpg"
                      alt=""
                      layout="constrained"
                      quality={90}
                      formats={[`auto`, `webp`, `avif`]}
                      placeholder="blurred"
                      width={720}
                      aspectRatio={16 / 9}
                    />
                  </MotionBox>
                </Link>
              </Grid>
            </Stack>
          </Stack>
        </FullWidthContainer>
        <Container>
          <Flex alignItems="center" flexDirection="column" py={space.paddingLarge}>
            <Heading as="h2">Loophole.Cloud</Heading>
            <Text variant="prominent" maxWidth="40ch" textAlign="center">
              Working with one of the most enthusiastic team to build and maintain Loophole, accessible to everyone
              fills me with joy.
            </Text>
            <Spacer axis="vertical" size={20} />
            <Stack direction="column" width="100%" spacing={6}>
              <Flex justifyContent="space-between" alignItems="center">
                <Badge variant="dark">Links</Badge>
                <SubtleButton isExternal to="https://loophole.cloud/">
                  Know More!
                </SubtleButton>
              </Flex>
              {/* <Grid gridTemplateColumns={[`1fr`, null, null, `2fr 1fr`]} gap={6}>
                <Box bg={primaryRepoBg} color="#e7f1ff" p={6} borderRadius="lg">
                  <Flex flexDirection="row" justifyContent="space-between" mb={6}>
                    <ChakraLink
                      fontSize={[`lg`, null, null, null, `1.3125rem`]}
                      color="white"
                      fontWeight="bold"
                      href={primRepo.url}
                    >
                      {primRepo.name}
                    </ChakraLink>
                    <Tag variant="subtle" colorScheme="blue">
                      <TagLeftIcon as={FaStar} />
                      <TagLabel>{primRepo.stargazerCount}</TagLabel>
                    </Tag>
                  </Flex>
                  <Text>{primRepo.description}</Text>
                </Box>
                <Box bg={secondaryRepoBg} p={6} borderRadius="lg">
                  <Flex flexDirection="row" justifyContent="space-between" mb={6}>
                    <ChakraLink fontSize={[`lg`, null, null, null, `1.3125rem`]} fontWeight="bold" href={secRepo.url}>
                      {secRepo.name}
                    </ChakraLink>
                    <Tag variant="subtle" colorScheme="gray">
                      <TagLeftIcon as={FaStar} />
                      <TagLabel>{secRepo.stargazerCount}</TagLabel>
                    </Tag>
                  </Flex>
                  <Text>{secRepo.description}</Text>
                </Box>
              </Grid> */}
              <Flex justifyContent="space-between" flexWrap="wrap">
                {openSourceRepos.map((repo) => (
                  <ChakraLink key={repo.url} href={repo.url} p={2}>
                    {repo.name}
                  </ChakraLink>
                ))}
              </Flex>
            </Stack>
          </Flex>
        </Container>
      </SkipNavContent>
    </Layout>
  )
}

export default Index

export const query = graphql`
  {
    posts: allPost(filter: { published: { eq: true } }, sort: { fields: date, order: DESC }, limit: 4) {
      nodes {
        title
        description
        slug
      }
    }
    garden: allGarden(
      limit: 3
      sort: { fields: lastUpdated, order: DESC }
      filter: { slug: { ne: "/garden/what-is-a-digital-garden" } }
    ) {
      nodes {
        title
        slug
      }
    }
  }
`
