const searchTypes = ["album", "artist", "playlist", "track", "show", "episode"];

const errors = {
  queryTypeError: { error: "query is not type of string" },
  typesTypeError: { error: "types is not type of string[]" },
  typesTypeNotSupported: {
    error: `types contains string(s) other than "album", "artist", "playlist", "track", "show", "episode"`,
  },
};

export const requestBodyValidator = (
  body: any
): {
  error?: string;
  query?: string;
  types?: any;
  options?: any;
} => {
  let { query, types, options } = body;

  if (typeof query !== "string") return errors.queryTypeError;

  if (typeof types === "undefined") {
    types = searchTypes;
  }
  if (typeof types !== "object" || !!types.isArray)
    return errors.typesTypeError;
  if ((types as any[]).some((elem) => typeof elem !== "string"))
    return errors.typesTypeError;
  if ((types as string[]).some((elem) => !searchTypes.includes(elem)))
    return errors.typesTypeNotSupported;

  return { query, types, options };
};
