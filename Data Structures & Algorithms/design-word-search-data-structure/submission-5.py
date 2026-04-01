class Node:
    def __init__(self):
        self.children = {}
        self.word = False

class WordDictionary:

    def __init__(self):
        self.root = Node()

    def addWord(self, word: str) -> None:
        cur = self.root

        for c in word:
            if c not in cur.children:
                cur.children[c] = Node()
            cur = cur.children[c]
        cur.word = True

    def search(self, word: str) -> bool:
        def dfs(j, root):
            cur = root

            if j >= len(word):
                return root.word

            if word[j] == '.':
                for c in cur.children:
                    if dfs(j + 1, cur.children[c]):
                        return True
                return False
            if word[j] not in cur.children:
                return False
            
            return dfs(j + 1, cur.children[word[j]])

        return dfs(0, self.root)
