
import { jest } from "@jest/globals";
import * as userService from "../../src/services/usersService"
import * as usersFactory from "../factories/userFactory"
import * as usersRepository from "../../src/repositories/usersRepository"

describe("", () => {
	beforeEach(() => {
		jest.resetAllMocks();
		jest.clearAllMocks();
	});

	it("create a user with email already register", async () => {
        
		const user = await usersFactory.createBodyUser()

		jest.spyOn(usersRepository, "findEmail")
			.mockResolvedValueOnce({
				id:1, 
				email: "caiovitor@hotmail.com",
                name: "caio",
                password: "caio123!",
                image: "aaaaa",
                nextReading: 2,
                favoriteBook:   "Um dia",
                favoriteAuthor:  "Nicholas",
                readingGoals: 3
			});
            
		jest.spyOn(usersRepository, "insertUser")
        .mockImplementationOnce((): any => {});


		const promise = userService.createUser(user)

		expect(promise).rejects.toEqual({
			message: "this account is already use",
			code: "conflict"
		}); 
		expect(usersRepository.insertUser).not.toBeCalled();
	});
    it("create a new user", async () => {
        
		const user = await usersFactory.createBodyUser()

		jest.spyOn(usersRepository, "findEmail")
        .mockImplementationOnce((): any => null);

            
		jest.spyOn(usersRepository, "insertUser")
        .mockImplementationOnce((): any => {});


		const promise = await userService.createUser(user)
		
        expect(usersRepository.findEmail).toBeCalled();
		expect(usersRepository.insertUser).toBeCalled();
	});
    
    it("login with email not register", async () => {
        
		const user = await usersFactory.createBodyUser()

		jest.spyOn(usersRepository, "findEmail")
        .mockImplementationOnce((): any => null);
            
		const promise = userService.createUser(user)

		expect(promise).rejects.toEqual({
			message: "this email is not register",
			code: "Unauthorized"
		}); 
		expect(usersRepository.insertUser).not.toBeCalled();
	});
	


});

