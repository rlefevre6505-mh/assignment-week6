# React Photo Gallery

# Reflections

I struggled more than with previous assignments, as although I have got the basics fom the React aspects we have studied, I'm not yet confident in my understanding of some methods and not confident in ultilising everythiing I've learned fully. Having said that, now that I am toards the end fo the assignment work, I do feel more comfortable with React overall. I managed to set up the project and make some components easily, though in retrospect I would have prefereed to use more components and break down the parts fo the app more, for example, making the header with the search bar a separate component, and the thumbnail container.

In terms of requirements achieved, I managed to implement useState and UseEffect as specified, used multiple components, used the .map method to render images, ensure all images had suitable alt text, allowed imaged to be displayed at a larger size by selecting the thumbnail, and implemented nagivation wiht the tab, space and enter keys. For stretch goals, I used multiple useStates and dependancies in useEffects to manage some of the functional aspects of the page (including search functionality, which technically works but causes fullsize images rendered not to match thumbnails - more on this in the following paragraph), used the Unspalsh API to fetch image data while keeping any keys in the .env file, and styled the page responsively, using vanilla CSS including use fo multiple grid layouts, flexbox sections and some media queries.

The search function took quite a while to get working, but through this I gained a better understanding of useState and more experience wiht different applications of conditional rendering, as I had to think through the logic quite a bit to adapt what I had taken from tutorials to work as intended. Initially, although the search function updated a state to contain a filtered array of images, when clicking on one of the remaining thumbnails the fullsize image almost always rendered as the image from the original array with the same index. I tried for quite a while to figure this out, and only after going over a lot of possibilities did I realise that it was a simple case of how I had set up fullsize rendering for the selected image, as this had not taken into account the second array of images.
Unfortunately, due to the Unsplash API providing a lot of data, but only the "alt" text in each object that containing any usable text for matching search terms, there were not other tags of keywords to match the query with other than the alt description.

I intended to make the gallery scrollable using the left and right keys, and on-screen buttons, but did not have much time to finish building this functionality once other requirements had been met. I was able to implement tabIndex on thumbnails, making the gallery navigable using tab, and with enter or space able to select an image from the thumbnails.

Please provide some feedback on what Icould have done to make the ocrrect fullsize images render from thumbnail selection following a search.

#

🎯 If so, what was it that you found difficult about these tasks?
🏹 Feel free to add any other reflections you would like to share about your submission, for example:
Requesting feedback about a specific part of your submission.
What useful external sources helped you complete the assignment (e.g Youtube tutorials)?
What errors or bugs did you encounter while completing your assignment? How did you solve them?
What went really well and what could have gone better?
