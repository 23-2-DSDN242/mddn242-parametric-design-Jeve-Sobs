[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/ihfjUrzT)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11550812&assignment_repo_type=AssignmentRepo)
## MDDN 242 2023 Assignment 2

Inspiration Image

![plot](inspiration-font.jpg)


My initial idea was to create something using dots, but after considering how I would implement it in a few parameters, I realised I could think of a better idea. I then started looking at fonts. Subsequently, I realised I could make any letter using 4 or less shapes. Given that we were recommended to use 12 or less parameters I tried to use 3 for each of the 4 shapes giving me 12 total. The first parameter indicates shape, size and colour, the second parameter is x position and the parameter is the y coordinate. The way I implemented the first parameter was by changing the shape every 10 integers and increasing the size and changing the colour as it increased. For each shape I had 3 sizes and 3 colours. 

The biggest challenge I faced was trying to animate the letters changing. Initially, I tried to map the opacity to the letters changing however this ended up looking pretty bad. I then tried to change the sizes of the shapes so they got small and disappeared and then reappeared and expanded but this also looked a bit rough. Finally I tried instantly changing the shapes and slowly moving them into the right positions and it looked really good. This really impressed me as I was pretty confident it would look worse than the other options and the only reason I tried it was to give myself some new ideas. 

I decided to call my font TETRATXT because tetra means 4 in ancient greek and every letter is made up of at most 4 shapes. 
