/*
So there are a couple of things about the html that you setup. 
THe first thing is that you should not usually setup a bunch of different
ids for elements, ids cannot be reused, and they are unique elements. 

what you would want to do it set up classes for them instead.
<div class="redsquare"></div>

this way, anything that you want to apply that styling to, you can just give it that class
(you can actually add and remove classes dynamically through javascript during runtime,
this is how we would create the maps randomly and not have any issue, but the player instances
would have ids since they would be unique and there would never be more than 2 of them,
player1, player2) 

I was looking around and I thought I was going to be able to add a grid without table items, 
but when I made something similar last time I used table elements, so that might be something 
we are forced into doing. So you were right, I think we are going to have to use a table for this

but there are ways to enter these into the the DOM(document obect model, which basically just means
the structure of the html on the page) with javascript. you basically build this big string using a
double for loop and then you append it to the parent div, SO at runtime it appends this string to 
the dom and generates it on the page. I think I have something on my flashdrive that does that
and I can show you how it all works later today. 

but you can look into that if you want, there are plenty of examples of that online if you
google inserting a table into dom with javascript. 

I have not done this in what feels like forever, so I will have to work on getting back
on the bike, so to speak with js and html. Positioning is always a little funny and I have
always had a hard time getting that to work properly.
*/