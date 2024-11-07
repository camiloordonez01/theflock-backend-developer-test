export default class {
    async get(id: number) {
        if (id === 1) return null

        return {
            id: 2,
            name: "Hotel #2",
            address: "Direción 2",
            stars: 3
        }
    }

    async getAll() {
        return [
            {
                id: 2,
                name: "Hotel #2",
                address: "Direción 2",
                stars: 3
            },
            {
                id: 3,
                name: "Hotel #3",
                address: "Direción 3",
                stars: 2
            }
        ]
    }

    async save() {
        return {
            id: 1,
            name: "Hotel #1",
            address: "Direción 1",
            stars: 3
        }
    }

    async update(id: number) {
        return {
            id: 2,
            name: "Hotel #2",
            address: "Direción 2",
            stars: 3
        }
    }

    async delete() {
        return 2
    }
}

// import { jest } from "@jest/globals";

// const mock = jest.fn().mockImplementation(() => {
//     return {
//         get: jest.fn()
//     }
// });

// export default mock;