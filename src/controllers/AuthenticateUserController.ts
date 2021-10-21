import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthentcateUserService";


class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    
    const { code } = request.body;

    const service = new AuthenticateUserService();
    try{
      const result = await service.execute(code);
      return response.json(result);
    } catch(err){
      return response.json(err.message);
    }
  }
}

export { AuthenticateUserController }
