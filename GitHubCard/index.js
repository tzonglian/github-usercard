import axios from 'axios'

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/tzonglian')
  .then(response => {
    console.log('response:', response)
    const createCards = document.querySelector('.cards')
    createCards.append(cardMaker(response.data))
  })
  .catch(error =>{
    console.log('error:', error)
  })
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

//appended into step 1

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

axios.get('https://api.github.com/users/tzonglian/followers')
  .then( response => {
      console.log('responseFollowers:', response)
      const followersArray = response.data;
      console.log(followersArray);
      // For each follower object: 
      // 1) grab url
      const followersURLsOnly = followersArray.map((person) => {
        console.log(person.html_url)
        return person.html_url
      })
      console.log(followersURLsOnly)
      return followersURLsOnly
    })
  .catch (error =>{
    console.log('error:', error)
  })

  //   // 2) go to url and grab infos/create card
  //   followersURLsOnly.forEach(URL => {
  //     axios.get(URL)
  //     .then(newResponse =>{
  //       console.log('newResponse:', newResponse)
  //       // const followersArray = response.data;
  //       // console.log(followersArray);
  //     })
  //   })
  //   // 3) append to DOM
  // })
  

    //const createCards = document.querySelector('.cards')
    //createCards.append(cardMaker(response.data))


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardMaker(cardData){
  //elements
  const cardGroup = document.createElement('div')
  const cardPic = document.createElement('img')
  const cardInfo = document.createElement('div')
  const cardName = document.createElement('h3')
  const cardUsername = document.createElement('p')
  const cardLocation = document.createElement('p')
  const cardProfile = document.createElement('p')
  const cardGithub = document.createElement('a')
  const cardFollowers = document.createElement('p')
  const cardFollowing = document.createElement('p')
  const cardBio = document.createElement('p')

  //classes
  cardGroup.className = 'card'
  cardInfo.className = 'card-info'
  cardName.className = 'name'
  cardUsername.className = 'username'

  //add children
  cardGroup.appendChild(cardPic)
  cardGroup.appendChild(cardInfo)
  cardInfo.appendChild(cardName)
  cardInfo.appendChild(cardUsername)
  cardInfo.appendChild(cardLocation)
  cardInfo.appendChild(cardProfile)        
  cardInfo.appendChild(cardFollowers)
  cardInfo.appendChild(cardFollowing)
  cardInfo.appendChild(cardBio)


  //content
  cardPic.src = cardData.avatar_url
  cardName.textContent = `${cardData.name}`
  cardUsername.textContent = `${cardData.login}`
  cardLocation.textContent = `Location: ${cardData.location}`

  cardGithub.href = `${cardData.html_url}`
  cardGithub.textContent = `${cardData.html_url}`
  cardProfile.textContent = 'Profile: '
  cardProfile.appendChild(cardGithub) 

  cardFollowers.textContent = `Followers: ${cardData.followers}` 
  cardFollowing.textContent = `Following: ${cardData.following}`
  cardBio.textContent = `Bio: ${cardData.bio}`

  return cardGroup

}



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
