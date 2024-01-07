import { TokenStandard } from "@metaplex-foundation/mpl-token-metadata";
const { candyMachine } = await metaplex.candyMachines().create({
    // ...
    guards: {
      nftBurn: {
        requiredCollection: requiredCollectionNft.address,
      },
    },
  });

  mintV2(umi, {
    // ...
    mintArgs: {
      nftBurn: some({
        requiredCollection: requiredCollectionNft.publicKey,
        mint: nftToBurn.publicKey,
        tokenStandard: TokenStandard.NonFungible,
      }),
    },
  });

  create(umi, {
    // ...
    guards: {
      nftBurn: some({ requiredCollection: requiredCollectionNft.publicKey }),
    },
  });