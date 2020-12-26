import NetworkService from "@/api/network";

export class AuthApi {

    static async facebookLogin(facebookAuthResponse) {
        const {user} = await NetworkService.post("/api/auth/facebook/login", { facebookAuthResponse })
        return user;
    }
}