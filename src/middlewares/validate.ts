import { NextFunction, Request, Response } from 'express';
import { AnySchema } from 'yup';

const validateShape =
  (shape: AnySchema) =>
  async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    const resource = req.body;
    try {
      const validated = await shape.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
      });
      req.validated = validated;
      return next();
      next();
    } catch (e: any) {
      res.status(400).json({ error: e.errors.join(', ') });
    }
  };

export default validateShape;
