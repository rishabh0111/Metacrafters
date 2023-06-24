/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// Create an array to hold your NFTs
let NFTs = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the array above.
function mintNFT(title, creator, description, image, year) {
  const NFT = {
    "title": title,
    "creator": creator,
    "description": description,
    "image": image,
    "year": year
  };
  NFTs.push(NFT);
}

// Create a "loop" that will go through the array of NFTs
// and print their metadata with console.log()
function listNFTs() {
  for (let i = 0; i < NFTs.length; i++) {
    console.log("Title: " + NFTs[i].title);
    console.log("Creator: " + NFTs[i].creator);
    console.log("Description: " + NFTs[i].description);
    console.log("Image: " + NFTs[i].image);
    console.log("Year: " + NFTs[i].year);
    console.log("-----------------------");
  }
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log("Total Supply: " + NFTs.length);
}

// Call your functions below this line

// Mint some NFTs
mintNFT("Digital Art", "John Smith", "A digital artwork representing surrealism", "artwork.jpg", 2022);
mintNFT("Photography", "Jane Doe", "A photograph capturing the beauty of nature", "photo.jpg", 2021);
mintNFT("Music Album", "Alice Johnson", "An album featuring electronic music compositions", "album.jpg", 2023);

// List the NFTs
listNFTs();

// Get the total supply
getTotalSupply();
