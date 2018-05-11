unfortunetly github changes the preview of the original text file
in the first 3 section (stars and row/column indexes) the picture would look like a matrix

012345678
1   **
2  ****
3 ******
4********
5********
6 ******
7  ****
8   **

01234567
1   *
2  ***
3 *****
4*******
5 *****
6  ***
7   *

0	1	2	3	4	5
			*
1	+2 -0	+3 -1	+4 -2	+5 -3	+6 -4
		*	*	*
2	+3 -1	+4 -0	+5 -1	+6 -2	+7 -3
	*	*	*	*	*
3	+4 -2	+5 -1	+6 -0	+7 -1	+8 -2
		*	*	*
4	+5 -3	+6 -2	+7 -1	+8 -0	+9 -1
			*
5	+6 -4	+7 -3	+8 -2	+9 -1	+10 -0

number of stars: 13
middle row: 3 (at the end it wasn't important)
*: +4 -2; +4 -0; +5 -1; +6 -2; +4 -2; +5 -1; +6 -0; +7 -1; +8 -2; +6 -2; +7 -1; +8 -0; +8 -2
*:	+4 -2(x2); +4 -0;
	+5 -1(x2);
	+6 -2(x2); +6 -0;
	+7 -1(x2);
	+8 -2(x2); +8 -0

+: 4, 5, 6, 7, 8 (sum values where there is '*')
-: 2, 1, 0 (diff values where there is '*')

number of rows/columns: 5
possible summations of the row and column indexes: [2 - 10]
subrange where '*' is necessary (sum) [4 - 8]
possible differences of the row and column indexes: [0 - 4]
subrange where '*' is necessary (diff): [0 - 2]

modifier: 2 (in the code this variable is howManyLinesToMiddle)

Condition: IF indexSum in SubRangeSum AND indexDiff in SubRangeDiff THEN '*' ELSE ' '

So I wrote the code with these real values.

WHAT IF?
number of rows/columns: 7
sums: [2-14] -subrange: [5-11] (I tried different ranges in the existing and functoning code)
diffs: [0-6] -subrange: [0-3]
modifier: 3 (TESTED AND TRUE)
