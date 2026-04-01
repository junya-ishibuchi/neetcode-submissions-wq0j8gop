class Twitter:

    def __init__(self):
        self.count = 0
        self.tweetMap = {}
        self.followMap = {}
        
    def postTweet(self, userId: int, tweetId: int) -> None:
        if userId not in self.tweetMap:
            self.tweetMap[userId] = []
        self.tweetMap[userId].append([self.count, tweetId])
        self.count -= 1

    def getNewsFeed(self, userId: int) -> List[int]:
        result = []
        heap = []

        if userId not in self.followMap:
            self.followMap[userId] = set()

        self.followMap[userId].add(userId)
        for followeeId in self.followMap[userId]:
            if followeeId in self.tweetMap:
                index = len(self.tweetMap[followeeId]) - 1
                count, tweetId = self.tweetMap[followeeId][index]
                heap.append([count, tweetId, followeeId, index - 1])

        heapq.heapify(heap)

        while heap and len(result) < 10:
            count, tweetId, followeeId, index = heapq.heappop(heap)
            result.append(tweetId)
            if index >= 0:
                count, tweetId = self.tweetMap[followeeId][index]
                heapq.heappush(heap, [count, tweetId, followeeId, index - 1])

        return result

    def follow(self, followerId: int, followeeId: int) -> None:
        if followerId not in self.followMap:
            self.followMap[followerId] = set()
        self.followMap[followerId].add(followeeId)

    def unfollow(self, followerId: int, followeeId: int) -> None:
        if followerId in self.followMap:
            if followeeId in self.followMap[followerId]:
                self.followMap[followerId].remove(followeeId)
        
# count: {int}
# tweetMap: {{userId}: [{tweetId}, ...]}
# followMap: {{userId}: [{userId}, ...]}