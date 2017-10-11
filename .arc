@app
slug

@html
get / # displays posts and post form if logged in
get /versions/:hashID # view previous versions of the website

@json
post /slack #slack sign up
post /speaker #speaker proposal
post /sponsor #sponsorship request
post /update/meetup #fetch latest meetup information
post /update/playlist #fetch latest playlist information 

@tables
siteversion
  hashID *String
  stage **String

meetup
  meetupID *String
  fetchUTC **String

playlist
  playlistID *String
  fetchUTC **String

slacksignup
  email *String

speakers
  submitUTC *Number
  email **String
  insert Lambda

sponsors
  submitUTC *Number
  email **String
  insert Lambda