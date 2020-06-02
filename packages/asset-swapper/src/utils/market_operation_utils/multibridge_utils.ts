import { NULL_ADDRESS, TOKENS } from './constants';

// tslint:disable completed-docs

export function multiBridgeIntermediateToken(takerToken: string, makerToken: string): string {
    let intermediateToken = NULL_ADDRESS;
    if (takerToken !== TOKENS.WETH && makerToken !== TOKENS.WETH) {
        intermediateToken = TOKENS.WETH;
    } else if (takerToken === TOKENS.USDC || makerToken === TOKENS.USDC) {
        intermediateToken = TOKENS.DAI;
    }
    return intermediateToken;
}
