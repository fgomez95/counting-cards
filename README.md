# Basic JavaScript: Counting Cards

In the casino game Blackjack, a player can gain an advantage over the house 
by keeping track of the relative  number of high and low cards remaining in 
the deck. This is called Card Counting.

Having more high cards remaining in the deck favors the player.   Each card 
is assigned a value according to the table below. When the count         is 
positive, the player should bet high. When the count is zero or   negative, 
the player should bet low.

| Count Change  | Cards                     |
| ------------- |:-------------------------:|
| +1            | 2, 3, 4, 5, 6             |
| 0             | 7, 8, 9                   |
| -1            | 10, 'J', 'Q', 'K', 'A'    |

**Hint**
> Do NOT reset count to 0 when value is 7, 8, or 9.
> Do NOT return an array.
> Do NOT include quotes (single or double) in the output.

**Test Cases**
###### Cards Sequence 2, 3, 4, 5, 6 should return 5 Bet
###### Cards Sequence 7, 8, 9 should return 0 Hold
###### Cards Sequence 10, J, Q, K, A should return -5 Hold
###### Cards Sequence 3, 7, Q, 8, A should return -1 Hold
###### Cards Sequence 2, J, 9, 2, 7 should return 1 Bet
###### Cards Sequence 2, 2, 10 should return 1 Bet
###### Cards Sequence 3, 2, A, 10, K should return -1 Hold