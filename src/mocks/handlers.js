import {rest} from 'msw'

export const handlers = [
    rest.get('http://localhost:3030/scoops', ((req, res, ctx) => {
        return res(
            ctx.json([
                {name: 'Chocolate', imagePath: "/images/chocolate.png"},
                {name: 'Mint chip', imagePath: "/images/mint-chip.png"},
                {name: 'Vanilla', imagePath: "/images/vanilla.png"},
                {name: 'Salted caramel', imagePath: "/images/salted-caramel.png"}
            ])
        )
    }))
]

