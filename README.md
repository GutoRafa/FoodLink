
# FoodLink

This is a social media platform that aims to connect consumers to restaurants by having a timeline where restaurants advertise products that appear on the end user's timeline. The platform is built using Next.js and Firebase.

## Features

- Timeline of restaurant products and promotions.
- Ability to follow restaurants and receive notifications of their new products and promotions.
- Ability to search for restaurants and filter by location, cuisine, and price range.
- Ability for restaurants to create and manage their own profiles, post products and promotions, and interact with their followers.
- User authentication and authorization using Firebase Authentication.
- Real-time updates using Firebase Realtime Database.
- Responsive design for mobile and desktop devices.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository to your local machine.
2. Install the dependencies using `npm install`.
3. Create a Firebase project and enable Authentication and Realtime Database.
4. Create a `.env.local` file and add your Firebase configuration:
    ```
    NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
    NEXT_PUBLIC_FIREBASE_DATABASE_URL=your_database_url
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
    NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
    ```
5. Start the development server using `npm run dev`.

## Contributing

If you would like to contribute to the project, please follow these steps:

1. Fork the repository to your own account.
2. Create a new branch with a descriptive name (`git checkout -b my-new-feature`).
3. Make the necessary changes to the code.
4. Commit your changes (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin my-new-feature`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.