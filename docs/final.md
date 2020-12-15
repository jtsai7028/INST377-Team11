# Predicting Next Hits
## Team 11
## Team Members: Jessica Tsai, Malay Kalavadia, Rina Kim, Fahim Talukder
 
### Information Problem
There have been massive changes in popular music over time. From the jazz jubilees and disco decade to TikTok teens and actor-dancer-singer triple threats, we currently live in an epoch where singer-songwriters are around every corner and populating social media with their content. This change in popular music means that song structures have evolved as well. Genre, beats per minute (bpm), singer gender, age, etc. are all factors that play a role in making a particular song successful. Looking at these factors, we hope our project will be able to predict what types of songs will be the next big “hit.”
 
### Stakeholders/Target Browsers
Stakeholders who would be interested in our project include the artists writing the music, their producers editing and choosing songs to release, and labels and record companies looking for talented artists to be their next profitable investment. Our current target browser is Google Chrome browser, because it is one of the most-used browsers in technology.
 
### Data
We choose to work with Spotify API and web scrape information from the Billboard 100.  Spotify has extensive documentation about their API and it also has music, so we chose to work with Spotify data.  Little did we know the trouble this would bring us.
 
### Strategies and Solutions
Our project will take metadata from Spotify (e.g. “artist”, “album”) and use crossline textualization with billboard data to see which songs are popular and analyze their structure using metadata from Spotify, to see what factors are most important in creating a “hit song”. We will be using the Spotify API because it has a lot of “endpoint data” (metadata) that we can explore. The API also comes with extensive documentation about how to use and import the data for us to customize our project. Using this data, we can find other songs on Spotify that meet the standards for a “hit” as “predictions”.
 
After finalizing our wireframe and proposal, we did some contextual analysis of existing competitors to our project.  We found that while some websites such as the Billboard 100 and The Next Big sound showed rankings of popular songs and how they’ve changed in the past week, they did not give an explanation to why these songs were ranked at the top. Our application would distinguish itself from these websites by briefly explaining what criteria we are using to categorize a “popular” song and using that criteria to try to predict songs that will be great hits.

Another challenge we faced today was how to read a CSV in our JavaScript.  We eventually learned about the d3 module library, and imported it into our html page to be able to read a CSV and then convert the string into our desired data format, JSON (JSON.stringify() to turn the CSV into JSON strings, then JSON.parse() to turn the JSON strings into JSON objects).  This helped us extract the information we needed from the csvs.

As will be mentioned multiple times, Spotify API is extremely difficult to understand.  It is very complicated to get data.  Our approach to getting artist and song data, was the first extract artists from our csv, use the "Search" endpoint of Spotify API to find the <code>artist_id</code> which would then be used to get their song data from <code>top_tracks</code>, or scour <code>albums</code> for <code>tracks</code>.

Eventually, we because of our trouble working with Spotify API, we had to significantly lower the scope of our project.  We decided not to analyze songs and predict next hits, but allow a user to play top songs from the Billboard 100.  This still sets us aside from other sites, because we would be the only site to allow music to be played from Spotify, without needing a Spotify account, and still display the top hits in definite ranking.
 
### Technical System
We have four HTML pages linked together, all styled with the same CSS sheets.  We use multiple sheets, because one was a template we got from an online source and the other is our own styling sheet for very basic functions. We’ve kept these designs separate so we don’t accidentally overwrite any stylings with inheritance of cascading styling.
 
We chose to use web-scraping from the Billboard website because while this is still in the experimental phase, we would like to experiment with examples first before we tried to make our application automatically update. In addition, learning how to execute a Python web-scraping script and work with scraped data was a step we felt was a bit more complicated than we needed to complete this project.

Following Spotify API instructions, basic credentials and some support software is included in the server.js file to allow our application to access the information. Using examples of how to use Spotify API, our script.js will hold the scripts that will GET data from Spotify, process it, and display on our “Project Content” page as a canvas.js chart.
 
### Challenges faced
There is no easy tutorial found on how to get data from Spotify. Spotify has updated some pages, so some of the information conflicts with each other. For example, one page says that Spotify allows users to get endpoint data without authentication, but every other source says that developers who wish to use Spotify data must register their application. Once registered, Spotify has several developer “flows” to allow authentication, authorization, and access to certain endpoints. For our purposes, our application follows Spotify’s “Client Credentials” flow, which will prevent us from accessing user data; this is an added step of protection and step of simplifying our application so we don’t have to worry about infringing on any privacy issues.
 
Another impact of Spotify’s vague instructions on how to use data is the slow development of our project content itself. Spotify has a lot of documentation, but with no good examples or varied examples, most of our development relies on research and experimenting. Our development has been slow, and also complicated since working with the API would be more efficient if multiple members worked on it, but that would lead to merge conflict problems in GitHub for the code manager to handle.
 
Including Spotify credentials and other important functions into the server.js also meant that our servers would also slightly malfunction and throw errors because Spotify’s JavaScript code was an older version than what we use in class. While the keywords “require” and “var” didn’t cause much trouble in server processing, part of using the “Client Credentials” flow used a Buffer constructor “new Buffer()...”; this threw an error in our server because it caused a buffer overflow. We had to switch the syntax a bit to make this constructor compatible with the rest of our JavaScript, by changing the line from a constructor to dot-notation  “Buffer.from(string)...”
 
### Possible Future Work
In the future, we would like to go one step further with our web application development to have Predicting Next Hits available on mobile devices. Additionally, we would like our web application to predict multiple next big “Hit” songs. Lastly, we look forward to adding another layer to our application which will not only predict multiple next big “hit” songs but also predict the next popular artist. 
 
Aside from these new ideas, we also would polish up how our application functions; rather than using a single instance of a web-scrape to predict next hits, we would figure out a way to execute web-scraping scripts in our script.js so that our application can automatically update whenever the Billboard website updates.
