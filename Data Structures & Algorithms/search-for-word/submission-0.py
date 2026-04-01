class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        visitIdx = {}
        currentWord = []
        self.found = False

        def backtrack(r, c, idx):
            if len(currentWord) == len(word):
                self.found = True
                return
            
            if r < 0 or c < 0 or r >= len(board) or c >= len(board[0]) or (r, c) in visitIdx:
                return

            if board[r][c] != word[idx]:
                return
            
            currentWord.append(board[r][c])
            visitIdx[(r, c)] = True

            backtrack(r - 1, c, idx + 1)
            backtrack(r + 1, c, idx + 1)
            backtrack(r, c - 1, idx + 1)
            backtrack(r, c + 1, idx + 1)
            currentWord.pop()
            del visitIdx[(r, c)] 

        for r in range(len(board)):
            for c in range(len(board[r])):
                if self.found:
                    return True
                if board[r][c] == word[0]:
                    backtrack(r, c, 0)
        
        return self.found