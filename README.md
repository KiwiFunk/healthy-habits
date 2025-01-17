# Healthy Habits
A site promoting healthy habits to better your wellbeing to a variety of ages

## Project Outline

The goal of this project is to give advice and signpost people to topics and pages to help better and improve their mental and physical wellbeing. This is by no means a professional website, but seeks to give advice on simple lifestyle changes that can have wide benefits to wellbeing.

The site has been created based on frameworks, allowing for content to be easily added in the future when other artworks are created, or topics are needed. Each card has its data inside of a Class, with an array of classes storing the total number of cards. The mobile carousel uses the data from this array, and the desktop cards are generated for each index value.

## Wireframes

Wireframes were created in Balsamiq to give an initial idea of the layout. From the start I knew I wanted somethign that could hold a lot of content, yet didnt have a million pages to tab though or navigate. I also planned from early on to deliver a very different experience for mobile and desktop, however this will be a stretch goal due to time constraints.

![Wireframes](docs/SitePlan3.png)

## Color and Fonts

![Color Schemes](docs/SitePlan.png)

![Color Schemes](docs/SitePlan2.png)

## Mascot Design

I created some fun mascot characters to represent each different activity. I felt that this provided more charm and made the topic feel less sterile and medical like a lot of the sites on these topics do. I didn't want to downplay the importance of the contents, yet I also didnt want to make it feel so medical. The aim was to try and reach a range of different ages by having something that kids would enjoy, yet wouldnt feel overly childish to the point an older audience would feel insulted. Another concern was having a cartoon character that felt very coorporate and branded. Cartoons such as Bluey seem to balance this fine line well, and for a professional project, I'd most likely hire an illustrator with a lot of experience in this department.

![Mascots](docs/CreaturesSiteFull.png)

## Lighthouse Tests 

![Lighthouse](docs/Lighthouse.png)

The performance of my page is pretty good, with the full desktop mode dropping the performance down 5-10 points due to the amount of images being loaded. The majority of clients loading the desktop mode will be using a wifi connection, so this isn't as much of an issue.

My accessibility score was almost perfect, and I have addressed this in the next section.

For best practices, I only have one thing dropping my score so low, which is a warning about using 'overflow: visible' as it may cause objects to render out of bounds. This was an intentional design choice, so I will ignore this.

For SEO, my only issue is the fact that all my links to the details pages feature the same aria text. I can address this by adding a new variable to the card class in my JS. However this is a low priority and not needed for the MVP.

![ContrastCheck](docs/Page%20Contrast.png)

To address the 95 I scored in accessibility, I added a high contrast toggle to the Navbar. This sets the accent color to a darker tone, and lightens the background elements to achieve a sufficient contrast ratio across all the criteria. Using session cookies I can make sure the contrast choice remains across all site pages for the duration of the visit.

![ContrastCheck](docs/Contrast%20Mode.png)

After re-running the test with high contrast mode enabled, I was now able to finally score a 100 in accessability.