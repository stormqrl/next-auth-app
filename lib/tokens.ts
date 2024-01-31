import {
  getEmailVerificationTokenByUserId,
  getPasswordVerificationTokenByUserId
} from '@/data/verification';
import { db } from '@/lib/db';
import { v4 } from 'uuid';

export const generateEmailVerificationTokenByUserId = async (
  userId: string
) => {
  const token = v4();
  const expiresAt = new Date(new Date().getTime() + 60 * 60 * 1000);

  const existingToken = await getEmailVerificationTokenByUserId(userId);

  if (existingToken)
    await db.emailVerificationToken.delete({
      where: {
        id: existingToken.id
      }
    });

  const verificationToken = await db.emailVerificationToken.create({
    data: {
      token,
      expiresAt,
      userId
    }
  });

  return verificationToken;
};

export const generatePasswordVerificationTokenByUserId = async (
  userId: string
) => {
  const token = v4();
  const expiresAt = new Date(new Date().getTime() + 60 * 60 * 1000);

  const existingToken = await getPasswordVerificationTokenByUserId(userId);

  if (existingToken)
    await db.passwordVerificationToken.delete({
      where: {
        id: existingToken.id
      }
    });

  const verificationToken = await db.passwordVerificationToken.create({
    data: {
      token,
      expiresAt,
      userId
    }
  });

  return verificationToken;
};
