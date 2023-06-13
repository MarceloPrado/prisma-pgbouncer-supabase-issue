import { v4 as uuidv4 } from "uuid";
import { Prisma, TransactionType } from "@prisma/client";
import { faker } from "@faker-js/faker";

const createMockedData = (): Prisma.TransactionDemoCreateManyInput => {
  const date = faker.date.past();
  const name = faker.finance.accountName();
  const amountInCents = faker.number.int({ min: -10000, max: 10000 });

  return {
    accountId: uuidv4(),
    type: TransactionType.EXPENSE,
    date,
    name,
    providerId: uuidv4(),
    amountInCents,
    userId: uuidv4(),
    rawData: {
      id: uuidv4(),
      description: name,
      descriptionRaw: null,
      currencyCode: "BRL",
      amount: amountInCents,
      date: date.toISOString(),
      category: null,
      categoryId: null,
      balance: null,
      accountId: uuidv4(),
      providerCode: null,
      status: "POSTED",
      paymentData: null,
      type: "DEBIT",
      creditCardMetadata: null,
      merchant: null,
    },
  };
};

export const oneHundredRows = new Array(100)
  .fill(0)
  .map((i) => createMockedData());
