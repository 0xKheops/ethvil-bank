import { log } from "@graphprotocol/graph-ts";
import {
  Bid as BidEvent,
  GameEnd,
  GameStart,
  OwnershipTransferred,
} from "../generated/EvilBank/EvilBank";
import { Game, Bid } from "../generated/schema";

export function handleBid(event: BidEvent): void {
  const bidId = event.transaction.hash.toHex();
  const gameId = event.params.gameId.toString();

  log.info("BID bid={} Game={} amount={}", [
    bidId,
    gameId,
    event.params.bid.toString(),
  ]);

  let bid = new Bid(bidId);
  bid.timestamp = event.block.timestamp;
  bid.game = gameId;
  bid.amount = event.params.bid;
  bid.director = event.params.director;
  bid.save();

  let game = Game.load(gameId);
  if (!game) {
    log.error("game {} doesn't exist", [event.params.gameId.toHex()]);
  } else {
    game.director = event.params.director;
    game.highestBid = event.params.bid;
    game.save();
    log.info("Successfully updated game {} with bid {}", [
      event.params.gameId.toHex(),
      event.params.bid.toString(),
    ]);
  }
}

export function handleGameStart(event: GameStart): void {
  const gameId = event.params.gameId.toString();

  log.info("Game START : {}", [gameId]);

  const game = new Game(gameId);
  game.start = event.block.timestamp;
  game.director = event.params.director;
  game.highestBid = event.params.bid;
  game.save();
}

export function handleGameEnd(event: GameEnd): void {
  const gameId = event.params.gameId.toString();

  log.info("Game END : {}", [gameId]);

  const game = Game.load(gameId);
  if (game) {
    game.end = event.block.timestamp;
    game.director = event.params.director;
    game.highestBid = event.params.amount;
    game.save();
  }
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}
