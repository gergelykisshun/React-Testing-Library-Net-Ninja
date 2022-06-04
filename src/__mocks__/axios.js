const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: "Mack",
          last: "Man"
        },
        picture: {
          large: "https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
        },
        login: {
          username: "mackMan"
        }
      },
      {
        name: {
          first: "Mack",
          last: "Man"
        },
        picture: {
          large: "https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
        },
        login: {
          username: "mackMan"
        }
      },
      {
        name: {
          first: "Mack",
          last: "Man"
        },
        picture: {
          large: "https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
        },
        login: {
          username: "mackMan"
        }
      },
      {
        name: {
          first: "Mack",
          last: "Man"
        },
        picture: {
          large: "https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
        },
        login: {
          username: "mackMan"
        }
      },
      {
        name: {
          first: "Mack",
          last: "Man"
        },
        picture: {
          large: "https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
        },
        login: {
          username: "mackMan"
        }
      }
    ]
  }
}

const mockAxios = {
  get: jest.fn().mockResolvedValue(mockResponse)
}

export default mockAxios;
