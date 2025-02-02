export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-21'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: production'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: yxvn5cvo'
)
export const token = assertValue(
  process.env.SANITY_TOKEN,  
  'Missing environment variable: skHmPJGWRJPs2TSPj76cM1FH3GqbS3lblkr3bSJMytGtdytRzumwFUQiWqGdMLJVmorJMGbIMP75HOqtlZTXzCM7t41ymzt14Hw7sp5KVC2vBEUrmlkgAaI8C8MrcowqeVvz7Q53oLlIEuRfcVHDeFww4klzC14LnyoBxlyeSCvCufzixV3X '
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
