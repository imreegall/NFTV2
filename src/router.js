import { createRouter, createWebHistory } from "vue-router";

import nftMain from "./components/pages/nft-main.vue";

import nftAuction from "./components/pages/nft-auction.vue";
import nftAuctionLots from "./components/pages/auction/nft-auction-lots.vue";
import nftAuctionLot from "./components/pages/auction/nft-auction-lot.vue";

import nftWhitelist from "./components/pages/nft-whitelist.vue";
import nftRefLink from "./components/pages/nft-ref-link.vue";
import nftRef from "./components/pages/nft-ref.vue";

import nftSale from "./components/pages/nft-sale.vue";

import nft404 from "./components/ui-kit/404/nft-404.vue";

export default createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: "/",
            name: "main",
            component: nftMain,
            meta: {
                title: "Historical Collection"
            }
        },

        {
            path: "/auction",
            name: "auction",
            component: nftAuction,
            meta: {
                title: "Historical Collection - Auction"
            },
            children: [
                {
                    path: "",
                    name: "lots",
                    component: nftAuctionLots,
                    meta: {
                        title: "Historical Collection - Auction Lots"
                    }
                },

                {
                    path: ":id",
                    name: "nft",
                    component: nftAuctionLot,
                    meta: {
                        title: "Historical Collection - Auction Lot"
                    }
                }
            ]
        },

        {
            path: "/whitelist",
            name: "whitelist",
            component: nftWhitelist,
            meta: {
                title: "Historical Collection - Whitelist"
            }
        },

        {
            path: "/ref",
            name: "ref",
            component: nftRef,
            meta: {
                title: "Historical Collection - Referral System"
            }
        },

        {
            path: "/whitelist/:ref",
            name: "whitelistRef",
            component: nftRefLink,
            meta: {
                title: "Historical Collection - Whitelist"
            }
        },

        {
            path: "/sale",
            name: "sale",
            component: nftSale,
            meta: {
                title: "Historical Collection - NFT Sale"
            }
        },

        {
            path: "/:pathMatch(.*)*",
            name: "404",
            component: nft404,
            meta: {
                title: "Historical Collection - 404"
            }
        }
    ],

    scrollBehavior(to) {
        if (to.hash) {
            return { el: to.hash, left: 0}
        } else {
            return { x: 0, y: 0 }
        }
    }
})
