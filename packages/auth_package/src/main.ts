export function authenticateUser(username: string, password: string): boolean {
	return username === "admin" && password === "123456";
}
