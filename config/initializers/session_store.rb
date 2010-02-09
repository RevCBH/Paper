# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_Paper_session',
  :secret      => '5df68afd73fc0fe4c87c3055b3e77c17ac5a9987e15d35ae73e65df5650dda6f475e24ea400f01bbd387e2ccdb8059efb0ffc854765cfa9c07986191d66ba1bd'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
