# Algorithm

```swift
func algorithm(string theme,URL? sourceURL) -> [String] {
  let results:URL = search google for "\(theme)  site:\(sourceURL)"
  var companies:[String]
  for result in results { //maybe only first 10
      companies.append(companiesInText(text: result.text)
  }
  return companies
}
```



# mentors

- Patrick 

  - wealth management'

    

- Karim

  - bussiness development

- Mandai

  - Investment 

- Mat preynon

  - silicon valley
  - startup

- Rajeev Tumella

  - wealth management
  - digital assets

- 





Water infrastructure



- Iinitial costumers
  - Brokers
  - Venture Capitalists
- Future costumers
  - mid class citizen 



- opening can be shortened
- more on motive



//Although he doesn't feel like he has conceived the information he still buys a few of the major known companies in the market  Tablaeu, (more). 
//Throughout the years James tries to reaccess how well his portfolio represents the future he beleives in and how they are content with his personal interests and values. This is however a very time consuming task for him and he ends up just keeping the stocks he already own. 
//A few years down the line he finds that there has been several new companies and entering the market and a lot opportunities that he has missed. James is sad because even though he spent a lot of time researching he still wasn't able to invest properly in his vision of the future.



// Also he discovers new connections between the companies he invested in that he hadn't thought of. He is so inspired by this intersection of his interests that he a few months later creates a new startup combining his interests.

## 5 arguments

- Problem 1:08 min
  - James just exited his data science startup with a million dollar revenue. He is a happy and rich man. Still he really beleives that data science will be a big part of the future. So he wants to invest his money in the same area. To do so James spends several nights looking for what companies are fundamental to the data science industry. Who are the key players, how they relate to each other, what others industries are *those* companies in and so on. After several months with a lot of coffee and little sleep, searching through Bloomberg, Reuters, internet blogs, Twitter, Youtube and many more, James is overwhelmed. All the available information has given him analysis paralysis. He ends up not investing at all and keeps the money safely stalled in his bank account not contributing any value to his beliefs. He is sad and lazy and has nothing to wake up to.
- prototype 1:04 min
  - James discovers Motive. A way to invest in the future you beleive in. He inputs data science, also he wants to explore electric vehicles. Using Motive he is able to explore all the companies relevant to his beliefs.
  - James is shocked when he finds out that all the information the he previously had spent months on digging out is now presented to him simply by the click of a button. He explores key players and their connections to others. He can dig in to the media creating the link between them and his interests while also making himself more knowledgable.
  - James can now confidentely invest in the companies that he beleives in to help influence the industry. And finally when he has invested he uses Motive to get an overview of what themes are represented by his portfolio to make sure it is in line with his personal interests and values.
- solution 0:41 min
  - To achieve the capabilities of Motive the underlying graph exploration algorithm combines several news sources together to achieve insight into the connection between investing themes and companies. It does so by building a bipartite graph (figure) where an edge represents one or more websites creating the connection. This connection is made through analysing the media through Natural Language processing to extract the companies relevant for an investing theme for each media source. Through exploration of the graph it is possible to gain deep insight to the interconnections that had previously required a huge amount of research to find.
- mission 
  - Motive. We want to enable costumers to invest in what they beleive in.
- Team 0:15 
  - We are a team of people from the investement management industry together with data professionals to build out the core graph data structure and last but not least impressive designers to make a great UX.
- it can be so much more

# 

A tool help find stocks relevant on a thematic investment

