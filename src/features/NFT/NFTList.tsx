import { ActionIcon, Anchor, CopyButton, Group, Image, Stack, Text, Tooltip } from "@mantine/core";
import { FC } from "react";
import { IconCheck, IconCopy } from "@tabler/icons-react";
import { Nft } from "alchemy-sdk";

interface NFTListProps {
  nfts: Nft[],
}

const NFTList: FC<NFTListProps> = ({
  nfts
}: NFTListProps) => {

  return (
    <Group gap={"md"} maw={400} align="center" justify="space-between">
      {
        nfts && nfts.map(nft => {
          return (
            <Stack maw={100} key={nft.tokenId} gap={2} align='start'>
              <Image w={100} src={nft.image.pngUrl} />
              <Anchor size='sm' c={'var(--mantine-color-text)'} target='_blank' href={nft.image.originalUrl}>
                {nft.name}
              </Anchor>
            </Stack>
          )
        })
      }
    </Group>
  )
}

export default NFTList;