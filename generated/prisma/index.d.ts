
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AdminUser
 * 
 */
export type AdminUser = $Result.DefaultSelection<Prisma.$AdminUserPayload>
/**
 * Model Apartment
 * 
 */
export type Apartment = $Result.DefaultSelection<Prisma.$ApartmentPayload>
/**
 * Model ApartmentImage
 * 
 */
export type ApartmentImage = $Result.DefaultSelection<Prisma.$ApartmentImagePayload>
/**
 * Model Amenity
 * 
 */
export type Amenity = $Result.DefaultSelection<Prisma.$AmenityPayload>
/**
 * Model ApartmentAmenity
 * 
 */
export type ApartmentAmenity = $Result.DefaultSelection<Prisma.$ApartmentAmenityPayload>
/**
 * Model Guest
 * 
 */
export type Guest = $Result.DefaultSelection<Prisma.$GuestPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AdminUsers
 * const adminUsers = await prisma.adminUser.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more AdminUsers
   * const adminUsers = await prisma.adminUser.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.adminUser`: Exposes CRUD operations for the **AdminUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminUsers
    * const adminUsers = await prisma.adminUser.findMany()
    * ```
    */
  get adminUser(): Prisma.AdminUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apartment`: Exposes CRUD operations for the **Apartment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Apartments
    * const apartments = await prisma.apartment.findMany()
    * ```
    */
  get apartment(): Prisma.ApartmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apartmentImage`: Exposes CRUD operations for the **ApartmentImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApartmentImages
    * const apartmentImages = await prisma.apartmentImage.findMany()
    * ```
    */
  get apartmentImage(): Prisma.ApartmentImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.amenity`: Exposes CRUD operations for the **Amenity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Amenities
    * const amenities = await prisma.amenity.findMany()
    * ```
    */
  get amenity(): Prisma.AmenityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apartmentAmenity`: Exposes CRUD operations for the **ApartmentAmenity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApartmentAmenities
    * const apartmentAmenities = await prisma.apartmentAmenity.findMany()
    * ```
    */
  get apartmentAmenity(): Prisma.ApartmentAmenityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guest`: Exposes CRUD operations for the **Guest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Guests
    * const guests = await prisma.guest.findMany()
    * ```
    */
  get guest(): Prisma.GuestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    AdminUser: 'AdminUser',
    Apartment: 'Apartment',
    ApartmentImage: 'ApartmentImage',
    Amenity: 'Amenity',
    ApartmentAmenity: 'ApartmentAmenity',
    Guest: 'Guest',
    Booking: 'Booking'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "adminUser" | "apartment" | "apartmentImage" | "amenity" | "apartmentAmenity" | "guest" | "booking"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AdminUser: {
        payload: Prisma.$AdminUserPayload<ExtArgs>
        fields: Prisma.AdminUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findFirst: {
            args: Prisma.AdminUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findMany: {
            args: Prisma.AdminUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          create: {
            args: Prisma.AdminUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          createMany: {
            args: Prisma.AdminUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          delete: {
            args: Prisma.AdminUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          update: {
            args: Prisma.AdminUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          deleteMany: {
            args: Prisma.AdminUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          upsert: {
            args: Prisma.AdminUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          aggregate: {
            args: Prisma.AdminUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminUser>
          }
          groupBy: {
            args: Prisma.AdminUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminUserCountArgs<ExtArgs>
            result: $Utils.Optional<AdminUserCountAggregateOutputType> | number
          }
        }
      }
      Apartment: {
        payload: Prisma.$ApartmentPayload<ExtArgs>
        fields: Prisma.ApartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentPayload>
          }
          findFirst: {
            args: Prisma.ApartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentPayload>
          }
          findMany: {
            args: Prisma.ApartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentPayload>[]
          }
          create: {
            args: Prisma.ApartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentPayload>
          }
          createMany: {
            args: Prisma.ApartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApartmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentPayload>[]
          }
          delete: {
            args: Prisma.ApartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentPayload>
          }
          update: {
            args: Prisma.ApartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentPayload>
          }
          deleteMany: {
            args: Prisma.ApartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApartmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentPayload>[]
          }
          upsert: {
            args: Prisma.ApartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentPayload>
          }
          aggregate: {
            args: Prisma.ApartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApartment>
          }
          groupBy: {
            args: Prisma.ApartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApartmentCountArgs<ExtArgs>
            result: $Utils.Optional<ApartmentCountAggregateOutputType> | number
          }
        }
      }
      ApartmentImage: {
        payload: Prisma.$ApartmentImagePayload<ExtArgs>
        fields: Prisma.ApartmentImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApartmentImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApartmentImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentImagePayload>
          }
          findFirst: {
            args: Prisma.ApartmentImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApartmentImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentImagePayload>
          }
          findMany: {
            args: Prisma.ApartmentImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentImagePayload>[]
          }
          create: {
            args: Prisma.ApartmentImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentImagePayload>
          }
          createMany: {
            args: Prisma.ApartmentImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApartmentImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentImagePayload>[]
          }
          delete: {
            args: Prisma.ApartmentImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentImagePayload>
          }
          update: {
            args: Prisma.ApartmentImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentImagePayload>
          }
          deleteMany: {
            args: Prisma.ApartmentImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApartmentImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApartmentImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentImagePayload>[]
          }
          upsert: {
            args: Prisma.ApartmentImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentImagePayload>
          }
          aggregate: {
            args: Prisma.ApartmentImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApartmentImage>
          }
          groupBy: {
            args: Prisma.ApartmentImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApartmentImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApartmentImageCountArgs<ExtArgs>
            result: $Utils.Optional<ApartmentImageCountAggregateOutputType> | number
          }
        }
      }
      Amenity: {
        payload: Prisma.$AmenityPayload<ExtArgs>
        fields: Prisma.AmenityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AmenityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AmenityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          findFirst: {
            args: Prisma.AmenityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AmenityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          findMany: {
            args: Prisma.AmenityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>[]
          }
          create: {
            args: Prisma.AmenityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          createMany: {
            args: Prisma.AmenityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AmenityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>[]
          }
          delete: {
            args: Prisma.AmenityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          update: {
            args: Prisma.AmenityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          deleteMany: {
            args: Prisma.AmenityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AmenityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AmenityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>[]
          }
          upsert: {
            args: Prisma.AmenityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          aggregate: {
            args: Prisma.AmenityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAmenity>
          }
          groupBy: {
            args: Prisma.AmenityGroupByArgs<ExtArgs>
            result: $Utils.Optional<AmenityGroupByOutputType>[]
          }
          count: {
            args: Prisma.AmenityCountArgs<ExtArgs>
            result: $Utils.Optional<AmenityCountAggregateOutputType> | number
          }
        }
      }
      ApartmentAmenity: {
        payload: Prisma.$ApartmentAmenityPayload<ExtArgs>
        fields: Prisma.ApartmentAmenityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApartmentAmenityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentAmenityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApartmentAmenityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentAmenityPayload>
          }
          findFirst: {
            args: Prisma.ApartmentAmenityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentAmenityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApartmentAmenityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentAmenityPayload>
          }
          findMany: {
            args: Prisma.ApartmentAmenityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentAmenityPayload>[]
          }
          create: {
            args: Prisma.ApartmentAmenityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentAmenityPayload>
          }
          createMany: {
            args: Prisma.ApartmentAmenityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApartmentAmenityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentAmenityPayload>[]
          }
          delete: {
            args: Prisma.ApartmentAmenityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentAmenityPayload>
          }
          update: {
            args: Prisma.ApartmentAmenityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentAmenityPayload>
          }
          deleteMany: {
            args: Prisma.ApartmentAmenityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApartmentAmenityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApartmentAmenityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentAmenityPayload>[]
          }
          upsert: {
            args: Prisma.ApartmentAmenityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentAmenityPayload>
          }
          aggregate: {
            args: Prisma.ApartmentAmenityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApartmentAmenity>
          }
          groupBy: {
            args: Prisma.ApartmentAmenityGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApartmentAmenityGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApartmentAmenityCountArgs<ExtArgs>
            result: $Utils.Optional<ApartmentAmenityCountAggregateOutputType> | number
          }
        }
      }
      Guest: {
        payload: Prisma.$GuestPayload<ExtArgs>
        fields: Prisma.GuestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          findFirst: {
            args: Prisma.GuestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          findMany: {
            args: Prisma.GuestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>[]
          }
          create: {
            args: Prisma.GuestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          createMany: {
            args: Prisma.GuestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>[]
          }
          delete: {
            args: Prisma.GuestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          update: {
            args: Prisma.GuestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          deleteMany: {
            args: Prisma.GuestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GuestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>[]
          }
          upsert: {
            args: Prisma.GuestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          aggregate: {
            args: Prisma.GuestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuest>
          }
          groupBy: {
            args: Prisma.GuestGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuestGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuestCountArgs<ExtArgs>
            result: $Utils.Optional<GuestCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    adminUser?: AdminUserOmit
    apartment?: ApartmentOmit
    apartmentImage?: ApartmentImageOmit
    amenity?: AmenityOmit
    apartmentAmenity?: ApartmentAmenityOmit
    guest?: GuestOmit
    booking?: BookingOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ApartmentCountOutputType
   */

  export type ApartmentCountOutputType = {
    images: number
    amenities: number
    bookings: number
  }

  export type ApartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | ApartmentCountOutputTypeCountImagesArgs
    amenities?: boolean | ApartmentCountOutputTypeCountAmenitiesArgs
    bookings?: boolean | ApartmentCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * ApartmentCountOutputType without action
   */
  export type ApartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApartmentCountOutputType
     */
    select?: ApartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ApartmentCountOutputType without action
   */
  export type ApartmentCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApartmentImageWhereInput
  }

  /**
   * ApartmentCountOutputType without action
   */
  export type ApartmentCountOutputTypeCountAmenitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApartmentAmenityWhereInput
  }

  /**
   * ApartmentCountOutputType without action
   */
  export type ApartmentCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type AmenityCountOutputType
   */

  export type AmenityCountOutputType = {
    apartments: number
  }

  export type AmenityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apartments?: boolean | AmenityCountOutputTypeCountApartmentsArgs
  }

  // Custom InputTypes
  /**
   * AmenityCountOutputType without action
   */
  export type AmenityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmenityCountOutputType
     */
    select?: AmenityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AmenityCountOutputType without action
   */
  export type AmenityCountOutputTypeCountApartmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApartmentAmenityWhereInput
  }


  /**
   * Count Type GuestCountOutputType
   */

  export type GuestCountOutputType = {
    bookings: number
  }

  export type GuestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | GuestCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * GuestCountOutputType without action
   */
  export type GuestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestCountOutputType
     */
    select?: GuestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GuestCountOutputType without action
   */
  export type GuestCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model AdminUser
   */

  export type AggregateAdminUser = {
    _count: AdminUserCountAggregateOutputType | null
    _avg: AdminUserAvgAggregateOutputType | null
    _sum: AdminUserSumAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  export type AdminUserAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminUserSumAggregateOutputType = {
    id: number | null
  }

  export type AdminUserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    createdAt: Date | null
  }

  export type AdminUserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    createdAt: Date | null
  }

  export type AdminUserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    createdAt: number
    _all: number
  }


  export type AdminUserAvgAggregateInputType = {
    id?: true
  }

  export type AdminUserSumAggregateInputType = {
    id?: true
  }

  export type AdminUserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
  }

  export type AdminUserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
  }

  export type AdminUserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
    _all?: true
  }

  export type AdminUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUser to aggregate.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminUsers
    **/
    _count?: true | AdminUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminUserMaxAggregateInputType
  }

  export type GetAdminUserAggregateType<T extends AdminUserAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminUser[P]>
      : GetScalarType<T[P], AggregateAdminUser[P]>
  }




  export type AdminUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminUserWhereInput
    orderBy?: AdminUserOrderByWithAggregationInput | AdminUserOrderByWithAggregationInput[]
    by: AdminUserScalarFieldEnum[] | AdminUserScalarFieldEnum
    having?: AdminUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminUserCountAggregateInputType | true
    _avg?: AdminUserAvgAggregateInputType
    _sum?: AdminUserSumAggregateInputType
    _min?: AdminUserMinAggregateInputType
    _max?: AdminUserMaxAggregateInputType
  }

  export type AdminUserGroupByOutputType = {
    id: number
    username: string
    password: string
    createdAt: Date
    _count: AdminUserCountAggregateOutputType | null
    _avg: AdminUserAvgAggregateOutputType | null
    _sum: AdminUserSumAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  type GetAdminUserGroupByPayload<T extends AdminUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
            : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
        }
      >
    >


  export type AdminUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type AdminUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "createdAt", ExtArgs["result"]["adminUser"]>

  export type $AdminUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminUser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      createdAt: Date
    }, ExtArgs["result"]["adminUser"]>
    composites: {}
  }

  type AdminUserGetPayload<S extends boolean | null | undefined | AdminUserDefaultArgs> = $Result.GetResult<Prisma.$AdminUserPayload, S>

  type AdminUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminUserCountAggregateInputType | true
    }

  export interface AdminUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminUser'], meta: { name: 'AdminUser' } }
    /**
     * Find zero or one AdminUser that matches the filter.
     * @param {AdminUserFindUniqueArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminUserFindUniqueArgs>(args: SelectSubset<T, AdminUserFindUniqueArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminUserFindUniqueOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminUserFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminUserFindFirstArgs>(args?: SelectSubset<T, AdminUserFindFirstArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminUserFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminUsers
     * const adminUsers = await prisma.adminUser.findMany()
     * 
     * // Get first 10 AdminUsers
     * const adminUsers = await prisma.adminUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminUserFindManyArgs>(args?: SelectSubset<T, AdminUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminUser.
     * @param {AdminUserCreateArgs} args - Arguments to create a AdminUser.
     * @example
     * // Create one AdminUser
     * const AdminUser = await prisma.adminUser.create({
     *   data: {
     *     // ... data to create a AdminUser
     *   }
     * })
     * 
     */
    create<T extends AdminUserCreateArgs>(args: SelectSubset<T, AdminUserCreateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminUsers.
     * @param {AdminUserCreateManyArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminUserCreateManyArgs>(args?: SelectSubset<T, AdminUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminUsers and returns the data saved in the database.
     * @param {AdminUserCreateManyAndReturnArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminUsers and only return the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminUserCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdminUser.
     * @param {AdminUserDeleteArgs} args - Arguments to delete one AdminUser.
     * @example
     * // Delete one AdminUser
     * const AdminUser = await prisma.adminUser.delete({
     *   where: {
     *     // ... filter to delete one AdminUser
     *   }
     * })
     * 
     */
    delete<T extends AdminUserDeleteArgs>(args: SelectSubset<T, AdminUserDeleteArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminUser.
     * @param {AdminUserUpdateArgs} args - Arguments to update one AdminUser.
     * @example
     * // Update one AdminUser
     * const adminUser = await prisma.adminUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUserUpdateArgs>(args: SelectSubset<T, AdminUserUpdateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminUsers.
     * @param {AdminUserDeleteManyArgs} args - Arguments to filter AdminUsers to delete.
     * @example
     * // Delete a few AdminUsers
     * const { count } = await prisma.adminUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminUserDeleteManyArgs>(args?: SelectSubset<T, AdminUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminUsers
     * const adminUser = await prisma.adminUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUserUpdateManyArgs>(args: SelectSubset<T, AdminUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminUsers and returns the data updated in the database.
     * @param {AdminUserUpdateManyAndReturnArgs} args - Arguments to update many AdminUsers.
     * @example
     * // Update many AdminUsers
     * const adminUser = await prisma.adminUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdminUsers and only return the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUserUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdminUser.
     * @param {AdminUserUpsertArgs} args - Arguments to update or create a AdminUser.
     * @example
     * // Update or create a AdminUser
     * const adminUser = await prisma.adminUser.upsert({
     *   create: {
     *     // ... data to create a AdminUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminUser we want to update
     *   }
     * })
     */
    upsert<T extends AdminUserUpsertArgs>(args: SelectSubset<T, AdminUserUpsertArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserCountArgs} args - Arguments to filter AdminUsers to count.
     * @example
     * // Count the number of AdminUsers
     * const count = await prisma.adminUser.count({
     *   where: {
     *     // ... the filter for the AdminUsers we want to count
     *   }
     * })
    **/
    count<T extends AdminUserCountArgs>(
      args?: Subset<T, AdminUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminUserAggregateArgs>(args: Subset<T, AdminUserAggregateArgs>): Prisma.PrismaPromise<GetAdminUserAggregateType<T>>

    /**
     * Group by AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminUserGroupByArgs['orderBy'] }
        : { orderBy?: AdminUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminUser model
   */
  readonly fields: AdminUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdminUser model
   */
  interface AdminUserFieldRefs {
    readonly id: FieldRef<"AdminUser", 'Int'>
    readonly username: FieldRef<"AdminUser", 'String'>
    readonly password: FieldRef<"AdminUser", 'String'>
    readonly createdAt: FieldRef<"AdminUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminUser findUnique
   */
  export type AdminUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findUniqueOrThrow
   */
  export type AdminUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findFirst
   */
  export type AdminUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findFirstOrThrow
   */
  export type AdminUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findMany
   */
  export type AdminUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUsers to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser create
   */
  export type AdminUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data needed to create a AdminUser.
     */
    data: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
  }

  /**
   * AdminUser createMany
   */
  export type AdminUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminUser createManyAndReturn
   */
  export type AdminUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminUser update
   */
  export type AdminUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data needed to update a AdminUser.
     */
    data: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
    /**
     * Choose, which AdminUser to update.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser updateMany
   */
  export type AdminUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminUsers.
     */
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyInput>
    /**
     * Filter which AdminUsers to update
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to update.
     */
    limit?: number
  }

  /**
   * AdminUser updateManyAndReturn
   */
  export type AdminUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data used to update AdminUsers.
     */
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyInput>
    /**
     * Filter which AdminUsers to update
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to update.
     */
    limit?: number
  }

  /**
   * AdminUser upsert
   */
  export type AdminUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The filter to search for the AdminUser to update in case it exists.
     */
    where: AdminUserWhereUniqueInput
    /**
     * In case the AdminUser found by the `where` argument doesn't exist, create a new AdminUser with this data.
     */
    create: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
    /**
     * In case the AdminUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
  }

  /**
   * AdminUser delete
   */
  export type AdminUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter which AdminUser to delete.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser deleteMany
   */
  export type AdminUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUsers to delete
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to delete.
     */
    limit?: number
  }

  /**
   * AdminUser without action
   */
  export type AdminUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
  }


  /**
   * Model Apartment
   */

  export type AggregateApartment = {
    _count: ApartmentCountAggregateOutputType | null
    _avg: ApartmentAvgAggregateOutputType | null
    _sum: ApartmentSumAggregateOutputType | null
    _min: ApartmentMinAggregateOutputType | null
    _max: ApartmentMaxAggregateOutputType | null
  }

  export type ApartmentAvgAggregateOutputType = {
    id: number | null
    bedrooms: number | null
    bathrooms: number | null
    maxGuests: number | null
    pricePerNight: number | null
  }

  export type ApartmentSumAggregateOutputType = {
    id: number | null
    bedrooms: number | null
    bathrooms: number | null
    maxGuests: number | null
    pricePerNight: number | null
  }

  export type ApartmentMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    bedrooms: number | null
    bathrooms: number | null
    maxGuests: number | null
    pricePerNight: number | null
    isActive: boolean | null
  }

  export type ApartmentMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    bedrooms: number | null
    bathrooms: number | null
    maxGuests: number | null
    pricePerNight: number | null
    isActive: boolean | null
  }

  export type ApartmentCountAggregateOutputType = {
    id: number
    name: number
    description: number
    bedrooms: number
    bathrooms: number
    maxGuests: number
    pricePerNight: number
    isActive: number
    _all: number
  }


  export type ApartmentAvgAggregateInputType = {
    id?: true
    bedrooms?: true
    bathrooms?: true
    maxGuests?: true
    pricePerNight?: true
  }

  export type ApartmentSumAggregateInputType = {
    id?: true
    bedrooms?: true
    bathrooms?: true
    maxGuests?: true
    pricePerNight?: true
  }

  export type ApartmentMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    bedrooms?: true
    bathrooms?: true
    maxGuests?: true
    pricePerNight?: true
    isActive?: true
  }

  export type ApartmentMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    bedrooms?: true
    bathrooms?: true
    maxGuests?: true
    pricePerNight?: true
    isActive?: true
  }

  export type ApartmentCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    bedrooms?: true
    bathrooms?: true
    maxGuests?: true
    pricePerNight?: true
    isActive?: true
    _all?: true
  }

  export type ApartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Apartment to aggregate.
     */
    where?: ApartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apartments to fetch.
     */
    orderBy?: ApartmentOrderByWithRelationInput | ApartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apartments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Apartments
    **/
    _count?: true | ApartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApartmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApartmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApartmentMaxAggregateInputType
  }

  export type GetApartmentAggregateType<T extends ApartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateApartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApartment[P]>
      : GetScalarType<T[P], AggregateApartment[P]>
  }




  export type ApartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApartmentWhereInput
    orderBy?: ApartmentOrderByWithAggregationInput | ApartmentOrderByWithAggregationInput[]
    by: ApartmentScalarFieldEnum[] | ApartmentScalarFieldEnum
    having?: ApartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApartmentCountAggregateInputType | true
    _avg?: ApartmentAvgAggregateInputType
    _sum?: ApartmentSumAggregateInputType
    _min?: ApartmentMinAggregateInputType
    _max?: ApartmentMaxAggregateInputType
  }

  export type ApartmentGroupByOutputType = {
    id: number
    name: string
    description: string | null
    bedrooms: number
    bathrooms: number
    maxGuests: number
    pricePerNight: number
    isActive: boolean
    _count: ApartmentCountAggregateOutputType | null
    _avg: ApartmentAvgAggregateOutputType | null
    _sum: ApartmentSumAggregateOutputType | null
    _min: ApartmentMinAggregateOutputType | null
    _max: ApartmentMaxAggregateOutputType | null
  }

  type GetApartmentGroupByPayload<T extends ApartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApartmentGroupByOutputType[P]>
            : GetScalarType<T[P], ApartmentGroupByOutputType[P]>
        }
      >
    >


  export type ApartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    maxGuests?: boolean
    pricePerNight?: boolean
    isActive?: boolean
    images?: boolean | Apartment$imagesArgs<ExtArgs>
    amenities?: boolean | Apartment$amenitiesArgs<ExtArgs>
    bookings?: boolean | Apartment$bookingsArgs<ExtArgs>
    _count?: boolean | ApartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apartment"]>

  export type ApartmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    maxGuests?: boolean
    pricePerNight?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["apartment"]>

  export type ApartmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    maxGuests?: boolean
    pricePerNight?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["apartment"]>

  export type ApartmentSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    maxGuests?: boolean
    pricePerNight?: boolean
    isActive?: boolean
  }

  export type ApartmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "bedrooms" | "bathrooms" | "maxGuests" | "pricePerNight" | "isActive", ExtArgs["result"]["apartment"]>
  export type ApartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | Apartment$imagesArgs<ExtArgs>
    amenities?: boolean | Apartment$amenitiesArgs<ExtArgs>
    bookings?: boolean | Apartment$bookingsArgs<ExtArgs>
    _count?: boolean | ApartmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ApartmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ApartmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ApartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Apartment"
    objects: {
      images: Prisma.$ApartmentImagePayload<ExtArgs>[]
      amenities: Prisma.$ApartmentAmenityPayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      bedrooms: number
      bathrooms: number
      maxGuests: number
      pricePerNight: number
      isActive: boolean
    }, ExtArgs["result"]["apartment"]>
    composites: {}
  }

  type ApartmentGetPayload<S extends boolean | null | undefined | ApartmentDefaultArgs> = $Result.GetResult<Prisma.$ApartmentPayload, S>

  type ApartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApartmentCountAggregateInputType | true
    }

  export interface ApartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Apartment'], meta: { name: 'Apartment' } }
    /**
     * Find zero or one Apartment that matches the filter.
     * @param {ApartmentFindUniqueArgs} args - Arguments to find a Apartment
     * @example
     * // Get one Apartment
     * const apartment = await prisma.apartment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApartmentFindUniqueArgs>(args: SelectSubset<T, ApartmentFindUniqueArgs<ExtArgs>>): Prisma__ApartmentClient<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Apartment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApartmentFindUniqueOrThrowArgs} args - Arguments to find a Apartment
     * @example
     * // Get one Apartment
     * const apartment = await prisma.apartment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, ApartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApartmentClient<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Apartment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentFindFirstArgs} args - Arguments to find a Apartment
     * @example
     * // Get one Apartment
     * const apartment = await prisma.apartment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApartmentFindFirstArgs>(args?: SelectSubset<T, ApartmentFindFirstArgs<ExtArgs>>): Prisma__ApartmentClient<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Apartment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentFindFirstOrThrowArgs} args - Arguments to find a Apartment
     * @example
     * // Get one Apartment
     * const apartment = await prisma.apartment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, ApartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApartmentClient<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Apartments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Apartments
     * const apartments = await prisma.apartment.findMany()
     * 
     * // Get first 10 Apartments
     * const apartments = await prisma.apartment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apartmentWithIdOnly = await prisma.apartment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApartmentFindManyArgs>(args?: SelectSubset<T, ApartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Apartment.
     * @param {ApartmentCreateArgs} args - Arguments to create a Apartment.
     * @example
     * // Create one Apartment
     * const Apartment = await prisma.apartment.create({
     *   data: {
     *     // ... data to create a Apartment
     *   }
     * })
     * 
     */
    create<T extends ApartmentCreateArgs>(args: SelectSubset<T, ApartmentCreateArgs<ExtArgs>>): Prisma__ApartmentClient<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Apartments.
     * @param {ApartmentCreateManyArgs} args - Arguments to create many Apartments.
     * @example
     * // Create many Apartments
     * const apartment = await prisma.apartment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApartmentCreateManyArgs>(args?: SelectSubset<T, ApartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Apartments and returns the data saved in the database.
     * @param {ApartmentCreateManyAndReturnArgs} args - Arguments to create many Apartments.
     * @example
     * // Create many Apartments
     * const apartment = await prisma.apartment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Apartments and only return the `id`
     * const apartmentWithIdOnly = await prisma.apartment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApartmentCreateManyAndReturnArgs>(args?: SelectSubset<T, ApartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Apartment.
     * @param {ApartmentDeleteArgs} args - Arguments to delete one Apartment.
     * @example
     * // Delete one Apartment
     * const Apartment = await prisma.apartment.delete({
     *   where: {
     *     // ... filter to delete one Apartment
     *   }
     * })
     * 
     */
    delete<T extends ApartmentDeleteArgs>(args: SelectSubset<T, ApartmentDeleteArgs<ExtArgs>>): Prisma__ApartmentClient<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Apartment.
     * @param {ApartmentUpdateArgs} args - Arguments to update one Apartment.
     * @example
     * // Update one Apartment
     * const apartment = await prisma.apartment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApartmentUpdateArgs>(args: SelectSubset<T, ApartmentUpdateArgs<ExtArgs>>): Prisma__ApartmentClient<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Apartments.
     * @param {ApartmentDeleteManyArgs} args - Arguments to filter Apartments to delete.
     * @example
     * // Delete a few Apartments
     * const { count } = await prisma.apartment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApartmentDeleteManyArgs>(args?: SelectSubset<T, ApartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Apartments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Apartments
     * const apartment = await prisma.apartment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApartmentUpdateManyArgs>(args: SelectSubset<T, ApartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Apartments and returns the data updated in the database.
     * @param {ApartmentUpdateManyAndReturnArgs} args - Arguments to update many Apartments.
     * @example
     * // Update many Apartments
     * const apartment = await prisma.apartment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Apartments and only return the `id`
     * const apartmentWithIdOnly = await prisma.apartment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApartmentUpdateManyAndReturnArgs>(args: SelectSubset<T, ApartmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Apartment.
     * @param {ApartmentUpsertArgs} args - Arguments to update or create a Apartment.
     * @example
     * // Update or create a Apartment
     * const apartment = await prisma.apartment.upsert({
     *   create: {
     *     // ... data to create a Apartment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Apartment we want to update
     *   }
     * })
     */
    upsert<T extends ApartmentUpsertArgs>(args: SelectSubset<T, ApartmentUpsertArgs<ExtArgs>>): Prisma__ApartmentClient<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Apartments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentCountArgs} args - Arguments to filter Apartments to count.
     * @example
     * // Count the number of Apartments
     * const count = await prisma.apartment.count({
     *   where: {
     *     // ... the filter for the Apartments we want to count
     *   }
     * })
    **/
    count<T extends ApartmentCountArgs>(
      args?: Subset<T, ApartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Apartment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApartmentAggregateArgs>(args: Subset<T, ApartmentAggregateArgs>): Prisma.PrismaPromise<GetApartmentAggregateType<T>>

    /**
     * Group by Apartment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApartmentGroupByArgs['orderBy'] }
        : { orderBy?: ApartmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Apartment model
   */
  readonly fields: ApartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Apartment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends Apartment$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Apartment$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApartmentImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    amenities<T extends Apartment$amenitiesArgs<ExtArgs> = {}>(args?: Subset<T, Apartment$amenitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApartmentAmenityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends Apartment$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Apartment$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Apartment model
   */
  interface ApartmentFieldRefs {
    readonly id: FieldRef<"Apartment", 'Int'>
    readonly name: FieldRef<"Apartment", 'String'>
    readonly description: FieldRef<"Apartment", 'String'>
    readonly bedrooms: FieldRef<"Apartment", 'Int'>
    readonly bathrooms: FieldRef<"Apartment", 'Int'>
    readonly maxGuests: FieldRef<"Apartment", 'Int'>
    readonly pricePerNight: FieldRef<"Apartment", 'Float'>
    readonly isActive: FieldRef<"Apartment", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Apartment findUnique
   */
  export type ApartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apartment
     */
    select?: ApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apartment
     */
    omit?: ApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentInclude<ExtArgs> | null
    /**
     * Filter, which Apartment to fetch.
     */
    where: ApartmentWhereUniqueInput
  }

  /**
   * Apartment findUniqueOrThrow
   */
  export type ApartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apartment
     */
    select?: ApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apartment
     */
    omit?: ApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentInclude<ExtArgs> | null
    /**
     * Filter, which Apartment to fetch.
     */
    where: ApartmentWhereUniqueInput
  }

  /**
   * Apartment findFirst
   */
  export type ApartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apartment
     */
    select?: ApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apartment
     */
    omit?: ApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentInclude<ExtArgs> | null
    /**
     * Filter, which Apartment to fetch.
     */
    where?: ApartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apartments to fetch.
     */
    orderBy?: ApartmentOrderByWithRelationInput | ApartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Apartments.
     */
    cursor?: ApartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apartments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Apartments.
     */
    distinct?: ApartmentScalarFieldEnum | ApartmentScalarFieldEnum[]
  }

  /**
   * Apartment findFirstOrThrow
   */
  export type ApartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apartment
     */
    select?: ApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apartment
     */
    omit?: ApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentInclude<ExtArgs> | null
    /**
     * Filter, which Apartment to fetch.
     */
    where?: ApartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apartments to fetch.
     */
    orderBy?: ApartmentOrderByWithRelationInput | ApartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Apartments.
     */
    cursor?: ApartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apartments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Apartments.
     */
    distinct?: ApartmentScalarFieldEnum | ApartmentScalarFieldEnum[]
  }

  /**
   * Apartment findMany
   */
  export type ApartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apartment
     */
    select?: ApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apartment
     */
    omit?: ApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentInclude<ExtArgs> | null
    /**
     * Filter, which Apartments to fetch.
     */
    where?: ApartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apartments to fetch.
     */
    orderBy?: ApartmentOrderByWithRelationInput | ApartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Apartments.
     */
    cursor?: ApartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apartments.
     */
    skip?: number
    distinct?: ApartmentScalarFieldEnum | ApartmentScalarFieldEnum[]
  }

  /**
   * Apartment create
   */
  export type ApartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apartment
     */
    select?: ApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apartment
     */
    omit?: ApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Apartment.
     */
    data: XOR<ApartmentCreateInput, ApartmentUncheckedCreateInput>
  }

  /**
   * Apartment createMany
   */
  export type ApartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Apartments.
     */
    data: ApartmentCreateManyInput | ApartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Apartment createManyAndReturn
   */
  export type ApartmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apartment
     */
    select?: ApartmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Apartment
     */
    omit?: ApartmentOmit<ExtArgs> | null
    /**
     * The data used to create many Apartments.
     */
    data: ApartmentCreateManyInput | ApartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Apartment update
   */
  export type ApartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apartment
     */
    select?: ApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apartment
     */
    omit?: ApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Apartment.
     */
    data: XOR<ApartmentUpdateInput, ApartmentUncheckedUpdateInput>
    /**
     * Choose, which Apartment to update.
     */
    where: ApartmentWhereUniqueInput
  }

  /**
   * Apartment updateMany
   */
  export type ApartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Apartments.
     */
    data: XOR<ApartmentUpdateManyMutationInput, ApartmentUncheckedUpdateManyInput>
    /**
     * Filter which Apartments to update
     */
    where?: ApartmentWhereInput
    /**
     * Limit how many Apartments to update.
     */
    limit?: number
  }

  /**
   * Apartment updateManyAndReturn
   */
  export type ApartmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apartment
     */
    select?: ApartmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Apartment
     */
    omit?: ApartmentOmit<ExtArgs> | null
    /**
     * The data used to update Apartments.
     */
    data: XOR<ApartmentUpdateManyMutationInput, ApartmentUncheckedUpdateManyInput>
    /**
     * Filter which Apartments to update
     */
    where?: ApartmentWhereInput
    /**
     * Limit how many Apartments to update.
     */
    limit?: number
  }

  /**
   * Apartment upsert
   */
  export type ApartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apartment
     */
    select?: ApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apartment
     */
    omit?: ApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Apartment to update in case it exists.
     */
    where: ApartmentWhereUniqueInput
    /**
     * In case the Apartment found by the `where` argument doesn't exist, create a new Apartment with this data.
     */
    create: XOR<ApartmentCreateInput, ApartmentUncheckedCreateInput>
    /**
     * In case the Apartment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApartmentUpdateInput, ApartmentUncheckedUpdateInput>
  }

  /**
   * Apartment delete
   */
  export type ApartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apartment
     */
    select?: ApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apartment
     */
    omit?: ApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentInclude<ExtArgs> | null
    /**
     * Filter which Apartment to delete.
     */
    where: ApartmentWhereUniqueInput
  }

  /**
   * Apartment deleteMany
   */
  export type ApartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Apartments to delete
     */
    where?: ApartmentWhereInput
    /**
     * Limit how many Apartments to delete.
     */
    limit?: number
  }

  /**
   * Apartment.images
   */
  export type Apartment$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApartmentImage
     */
    select?: ApartmentImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApartmentImage
     */
    omit?: ApartmentImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentImageInclude<ExtArgs> | null
    where?: ApartmentImageWhereInput
    orderBy?: ApartmentImageOrderByWithRelationInput | ApartmentImageOrderByWithRelationInput[]
    cursor?: ApartmentImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApartmentImageScalarFieldEnum | ApartmentImageScalarFieldEnum[]
  }

  /**
   * Apartment.amenities
   */
  export type Apartment$amenitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApartmentAmenity
     */
    select?: ApartmentAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApartmentAmenity
     */
    omit?: ApartmentAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentAmenityInclude<ExtArgs> | null
    where?: ApartmentAmenityWhereInput
    orderBy?: ApartmentAmenityOrderByWithRelationInput | ApartmentAmenityOrderByWithRelationInput[]
    cursor?: ApartmentAmenityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApartmentAmenityScalarFieldEnum | ApartmentAmenityScalarFieldEnum[]
  }

  /**
   * Apartment.bookings
   */
  export type Apartment$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Apartment without action
   */
  export type ApartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apartment
     */
    select?: ApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apartment
     */
    omit?: ApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentInclude<ExtArgs> | null
  }


  /**
   * Model ApartmentImage
   */

  export type AggregateApartmentImage = {
    _count: ApartmentImageCountAggregateOutputType | null
    _avg: ApartmentImageAvgAggregateOutputType | null
    _sum: ApartmentImageSumAggregateOutputType | null
    _min: ApartmentImageMinAggregateOutputType | null
    _max: ApartmentImageMaxAggregateOutputType | null
  }

  export type ApartmentImageAvgAggregateOutputType = {
    id: number | null
    apartmentId: number | null
    sortOrder: number | null
  }

  export type ApartmentImageSumAggregateOutputType = {
    id: number | null
    apartmentId: number | null
    sortOrder: number | null
  }

  export type ApartmentImageMinAggregateOutputType = {
    id: number | null
    apartmentId: number | null
    imageUrl: string | null
    altText: string | null
    isMain: boolean | null
    sortOrder: number | null
  }

  export type ApartmentImageMaxAggregateOutputType = {
    id: number | null
    apartmentId: number | null
    imageUrl: string | null
    altText: string | null
    isMain: boolean | null
    sortOrder: number | null
  }

  export type ApartmentImageCountAggregateOutputType = {
    id: number
    apartmentId: number
    imageUrl: number
    altText: number
    isMain: number
    sortOrder: number
    _all: number
  }


  export type ApartmentImageAvgAggregateInputType = {
    id?: true
    apartmentId?: true
    sortOrder?: true
  }

  export type ApartmentImageSumAggregateInputType = {
    id?: true
    apartmentId?: true
    sortOrder?: true
  }

  export type ApartmentImageMinAggregateInputType = {
    id?: true
    apartmentId?: true
    imageUrl?: true
    altText?: true
    isMain?: true
    sortOrder?: true
  }

  export type ApartmentImageMaxAggregateInputType = {
    id?: true
    apartmentId?: true
    imageUrl?: true
    altText?: true
    isMain?: true
    sortOrder?: true
  }

  export type ApartmentImageCountAggregateInputType = {
    id?: true
    apartmentId?: true
    imageUrl?: true
    altText?: true
    isMain?: true
    sortOrder?: true
    _all?: true
  }

  export type ApartmentImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApartmentImage to aggregate.
     */
    where?: ApartmentImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApartmentImages to fetch.
     */
    orderBy?: ApartmentImageOrderByWithRelationInput | ApartmentImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApartmentImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApartmentImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApartmentImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApartmentImages
    **/
    _count?: true | ApartmentImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApartmentImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApartmentImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApartmentImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApartmentImageMaxAggregateInputType
  }

  export type GetApartmentImageAggregateType<T extends ApartmentImageAggregateArgs> = {
        [P in keyof T & keyof AggregateApartmentImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApartmentImage[P]>
      : GetScalarType<T[P], AggregateApartmentImage[P]>
  }




  export type ApartmentImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApartmentImageWhereInput
    orderBy?: ApartmentImageOrderByWithAggregationInput | ApartmentImageOrderByWithAggregationInput[]
    by: ApartmentImageScalarFieldEnum[] | ApartmentImageScalarFieldEnum
    having?: ApartmentImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApartmentImageCountAggregateInputType | true
    _avg?: ApartmentImageAvgAggregateInputType
    _sum?: ApartmentImageSumAggregateInputType
    _min?: ApartmentImageMinAggregateInputType
    _max?: ApartmentImageMaxAggregateInputType
  }

  export type ApartmentImageGroupByOutputType = {
    id: number
    apartmentId: number
    imageUrl: string
    altText: string | null
    isMain: boolean
    sortOrder: number
    _count: ApartmentImageCountAggregateOutputType | null
    _avg: ApartmentImageAvgAggregateOutputType | null
    _sum: ApartmentImageSumAggregateOutputType | null
    _min: ApartmentImageMinAggregateOutputType | null
    _max: ApartmentImageMaxAggregateOutputType | null
  }

  type GetApartmentImageGroupByPayload<T extends ApartmentImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApartmentImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApartmentImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApartmentImageGroupByOutputType[P]>
            : GetScalarType<T[P], ApartmentImageGroupByOutputType[P]>
        }
      >
    >


  export type ApartmentImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apartmentId?: boolean
    imageUrl?: boolean
    altText?: boolean
    isMain?: boolean
    sortOrder?: boolean
    apartment?: boolean | ApartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apartmentImage"]>

  export type ApartmentImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apartmentId?: boolean
    imageUrl?: boolean
    altText?: boolean
    isMain?: boolean
    sortOrder?: boolean
    apartment?: boolean | ApartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apartmentImage"]>

  export type ApartmentImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apartmentId?: boolean
    imageUrl?: boolean
    altText?: boolean
    isMain?: boolean
    sortOrder?: boolean
    apartment?: boolean | ApartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apartmentImage"]>

  export type ApartmentImageSelectScalar = {
    id?: boolean
    apartmentId?: boolean
    imageUrl?: boolean
    altText?: boolean
    isMain?: boolean
    sortOrder?: boolean
  }

  export type ApartmentImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "apartmentId" | "imageUrl" | "altText" | "isMain" | "sortOrder", ExtArgs["result"]["apartmentImage"]>
  export type ApartmentImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apartment?: boolean | ApartmentDefaultArgs<ExtArgs>
  }
  export type ApartmentImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apartment?: boolean | ApartmentDefaultArgs<ExtArgs>
  }
  export type ApartmentImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apartment?: boolean | ApartmentDefaultArgs<ExtArgs>
  }

  export type $ApartmentImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApartmentImage"
    objects: {
      apartment: Prisma.$ApartmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      apartmentId: number
      imageUrl: string
      altText: string | null
      isMain: boolean
      sortOrder: number
    }, ExtArgs["result"]["apartmentImage"]>
    composites: {}
  }

  type ApartmentImageGetPayload<S extends boolean | null | undefined | ApartmentImageDefaultArgs> = $Result.GetResult<Prisma.$ApartmentImagePayload, S>

  type ApartmentImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApartmentImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApartmentImageCountAggregateInputType | true
    }

  export interface ApartmentImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApartmentImage'], meta: { name: 'ApartmentImage' } }
    /**
     * Find zero or one ApartmentImage that matches the filter.
     * @param {ApartmentImageFindUniqueArgs} args - Arguments to find a ApartmentImage
     * @example
     * // Get one ApartmentImage
     * const apartmentImage = await prisma.apartmentImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApartmentImageFindUniqueArgs>(args: SelectSubset<T, ApartmentImageFindUniqueArgs<ExtArgs>>): Prisma__ApartmentImageClient<$Result.GetResult<Prisma.$ApartmentImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApartmentImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApartmentImageFindUniqueOrThrowArgs} args - Arguments to find a ApartmentImage
     * @example
     * // Get one ApartmentImage
     * const apartmentImage = await prisma.apartmentImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApartmentImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ApartmentImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApartmentImageClient<$Result.GetResult<Prisma.$ApartmentImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApartmentImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentImageFindFirstArgs} args - Arguments to find a ApartmentImage
     * @example
     * // Get one ApartmentImage
     * const apartmentImage = await prisma.apartmentImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApartmentImageFindFirstArgs>(args?: SelectSubset<T, ApartmentImageFindFirstArgs<ExtArgs>>): Prisma__ApartmentImageClient<$Result.GetResult<Prisma.$ApartmentImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApartmentImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentImageFindFirstOrThrowArgs} args - Arguments to find a ApartmentImage
     * @example
     * // Get one ApartmentImage
     * const apartmentImage = await prisma.apartmentImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApartmentImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ApartmentImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApartmentImageClient<$Result.GetResult<Prisma.$ApartmentImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApartmentImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApartmentImages
     * const apartmentImages = await prisma.apartmentImage.findMany()
     * 
     * // Get first 10 ApartmentImages
     * const apartmentImages = await prisma.apartmentImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apartmentImageWithIdOnly = await prisma.apartmentImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApartmentImageFindManyArgs>(args?: SelectSubset<T, ApartmentImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApartmentImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApartmentImage.
     * @param {ApartmentImageCreateArgs} args - Arguments to create a ApartmentImage.
     * @example
     * // Create one ApartmentImage
     * const ApartmentImage = await prisma.apartmentImage.create({
     *   data: {
     *     // ... data to create a ApartmentImage
     *   }
     * })
     * 
     */
    create<T extends ApartmentImageCreateArgs>(args: SelectSubset<T, ApartmentImageCreateArgs<ExtArgs>>): Prisma__ApartmentImageClient<$Result.GetResult<Prisma.$ApartmentImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApartmentImages.
     * @param {ApartmentImageCreateManyArgs} args - Arguments to create many ApartmentImages.
     * @example
     * // Create many ApartmentImages
     * const apartmentImage = await prisma.apartmentImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApartmentImageCreateManyArgs>(args?: SelectSubset<T, ApartmentImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApartmentImages and returns the data saved in the database.
     * @param {ApartmentImageCreateManyAndReturnArgs} args - Arguments to create many ApartmentImages.
     * @example
     * // Create many ApartmentImages
     * const apartmentImage = await prisma.apartmentImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApartmentImages and only return the `id`
     * const apartmentImageWithIdOnly = await prisma.apartmentImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApartmentImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ApartmentImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApartmentImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApartmentImage.
     * @param {ApartmentImageDeleteArgs} args - Arguments to delete one ApartmentImage.
     * @example
     * // Delete one ApartmentImage
     * const ApartmentImage = await prisma.apartmentImage.delete({
     *   where: {
     *     // ... filter to delete one ApartmentImage
     *   }
     * })
     * 
     */
    delete<T extends ApartmentImageDeleteArgs>(args: SelectSubset<T, ApartmentImageDeleteArgs<ExtArgs>>): Prisma__ApartmentImageClient<$Result.GetResult<Prisma.$ApartmentImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApartmentImage.
     * @param {ApartmentImageUpdateArgs} args - Arguments to update one ApartmentImage.
     * @example
     * // Update one ApartmentImage
     * const apartmentImage = await prisma.apartmentImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApartmentImageUpdateArgs>(args: SelectSubset<T, ApartmentImageUpdateArgs<ExtArgs>>): Prisma__ApartmentImageClient<$Result.GetResult<Prisma.$ApartmentImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApartmentImages.
     * @param {ApartmentImageDeleteManyArgs} args - Arguments to filter ApartmentImages to delete.
     * @example
     * // Delete a few ApartmentImages
     * const { count } = await prisma.apartmentImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApartmentImageDeleteManyArgs>(args?: SelectSubset<T, ApartmentImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApartmentImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApartmentImages
     * const apartmentImage = await prisma.apartmentImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApartmentImageUpdateManyArgs>(args: SelectSubset<T, ApartmentImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApartmentImages and returns the data updated in the database.
     * @param {ApartmentImageUpdateManyAndReturnArgs} args - Arguments to update many ApartmentImages.
     * @example
     * // Update many ApartmentImages
     * const apartmentImage = await prisma.apartmentImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApartmentImages and only return the `id`
     * const apartmentImageWithIdOnly = await prisma.apartmentImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApartmentImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ApartmentImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApartmentImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApartmentImage.
     * @param {ApartmentImageUpsertArgs} args - Arguments to update or create a ApartmentImage.
     * @example
     * // Update or create a ApartmentImage
     * const apartmentImage = await prisma.apartmentImage.upsert({
     *   create: {
     *     // ... data to create a ApartmentImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApartmentImage we want to update
     *   }
     * })
     */
    upsert<T extends ApartmentImageUpsertArgs>(args: SelectSubset<T, ApartmentImageUpsertArgs<ExtArgs>>): Prisma__ApartmentImageClient<$Result.GetResult<Prisma.$ApartmentImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApartmentImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentImageCountArgs} args - Arguments to filter ApartmentImages to count.
     * @example
     * // Count the number of ApartmentImages
     * const count = await prisma.apartmentImage.count({
     *   where: {
     *     // ... the filter for the ApartmentImages we want to count
     *   }
     * })
    **/
    count<T extends ApartmentImageCountArgs>(
      args?: Subset<T, ApartmentImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApartmentImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApartmentImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApartmentImageAggregateArgs>(args: Subset<T, ApartmentImageAggregateArgs>): Prisma.PrismaPromise<GetApartmentImageAggregateType<T>>

    /**
     * Group by ApartmentImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApartmentImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApartmentImageGroupByArgs['orderBy'] }
        : { orderBy?: ApartmentImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApartmentImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApartmentImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApartmentImage model
   */
  readonly fields: ApartmentImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApartmentImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApartmentImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    apartment<T extends ApartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApartmentDefaultArgs<ExtArgs>>): Prisma__ApartmentClient<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApartmentImage model
   */
  interface ApartmentImageFieldRefs {
    readonly id: FieldRef<"ApartmentImage", 'Int'>
    readonly apartmentId: FieldRef<"ApartmentImage", 'Int'>
    readonly imageUrl: FieldRef<"ApartmentImage", 'String'>
    readonly altText: FieldRef<"ApartmentImage", 'String'>
    readonly isMain: FieldRef<"ApartmentImage", 'Boolean'>
    readonly sortOrder: FieldRef<"ApartmentImage", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ApartmentImage findUnique
   */
  export type ApartmentImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApartmentImage
     */
    select?: ApartmentImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApartmentImage
     */
    omit?: ApartmentImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentImageInclude<ExtArgs> | null
    /**
     * Filter, which ApartmentImage to fetch.
     */
    where: ApartmentImageWhereUniqueInput
  }

  /**
   * ApartmentImage findUniqueOrThrow
   */
  export type ApartmentImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApartmentImage
     */
    select?: ApartmentImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApartmentImage
     */
    omit?: ApartmentImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentImageInclude<ExtArgs> | null
    /**
     * Filter, which ApartmentImage to fetch.
     */
    where: ApartmentImageWhereUniqueInput
  }

  /**
   * ApartmentImage findFirst
   */
  export type ApartmentImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApartmentImage
     */
    select?: ApartmentImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApartmentImage
     */
    omit?: ApartmentImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentImageInclude<ExtArgs> | null
    /**
     * Filter, which ApartmentImage to fetch.
     */
    where?: ApartmentImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApartmentImages to fetch.
     */
    orderBy?: ApartmentImageOrderByWithRelationInput | ApartmentImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApartmentImages.
     */
    cursor?: ApartmentImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApartmentImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApartmentImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApartmentImages.
     */
    distinct?: ApartmentImageScalarFieldEnum | ApartmentImageScalarFieldEnum[]
  }

  /**
   * ApartmentImage findFirstOrThrow
   */
  export type ApartmentImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApartmentImage
     */
    select?: ApartmentImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApartmentImage
     */
    omit?: ApartmentImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentImageInclude<ExtArgs> | null
    /**
     * Filter, which ApartmentImage to fetch.
     */
    where?: ApartmentImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApartmentImages to fetch.
     */
    orderBy?: ApartmentImageOrderByWithRelationInput | ApartmentImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApartmentImages.
     */
    cursor?: ApartmentImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApartmentImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApartmentImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApartmentImages.
     */
    distinct?: ApartmentImageScalarFieldEnum | ApartmentImageScalarFieldEnum[]
  }

  /**
   * ApartmentImage findMany
   */
  export type ApartmentImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApartmentImage
     */
    select?: ApartmentImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApartmentImage
     */
    omit?: ApartmentImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentImageInclude<ExtArgs> | null
    /**
     * Filter, which ApartmentImages to fetch.
     */
    where?: ApartmentImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApartmentImages to fetch.
     */
    orderBy?: ApartmentImageOrderByWithRelationInput | ApartmentImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApartmentImages.
     */
    cursor?: ApartmentImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApartmentImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApartmentImages.
     */
    skip?: number
    distinct?: ApartmentImageScalarFieldEnum | ApartmentImageScalarFieldEnum[]
  }

  /**
   * ApartmentImage create
   */
  export type ApartmentImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApartmentImage
     */
    select?: ApartmentImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApartmentImage
     */
    omit?: ApartmentImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentImageInclude<ExtArgs> | null
    /**
     * The data needed to create a ApartmentImage.
     */
    data: XOR<ApartmentImageCreateInput, ApartmentImageUncheckedCreateInput>
  }

  /**
   * ApartmentImage createMany
   */
  export type ApartmentImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApartmentImages.
     */
    data: ApartmentImageCreateManyInput | ApartmentImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApartmentImage createManyAndReturn
   */
  export type ApartmentImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApartmentImage
     */
    select?: ApartmentImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApartmentImage
     */
    omit?: ApartmentImageOmit<ExtArgs> | null
    /**
     * The data used to create many ApartmentImages.
     */
    data: ApartmentImageCreateManyInput | ApartmentImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApartmentImage update
   */
  export type ApartmentImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApartmentImage
     */
    select?: ApartmentImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApartmentImage
     */
    omit?: ApartmentImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentImageInclude<ExtArgs> | null
    /**
     * The data needed to update a ApartmentImage.
     */
    data: XOR<ApartmentImageUpdateInput, ApartmentImageUncheckedUpdateInput>
    /**
     * Choose, which ApartmentImage to update.
     */
    where: ApartmentImageWhereUniqueInput
  }

  /**
   * ApartmentImage updateMany
   */
  export type ApartmentImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApartmentImages.
     */
    data: XOR<ApartmentImageUpdateManyMutationInput, ApartmentImageUncheckedUpdateManyInput>
    /**
     * Filter which ApartmentImages to update
     */
    where?: ApartmentImageWhereInput
    /**
     * Limit how many ApartmentImages to update.
     */
    limit?: number
  }

  /**
   * ApartmentImage updateManyAndReturn
   */
  export type ApartmentImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApartmentImage
     */
    select?: ApartmentImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApartmentImage
     */
    omit?: ApartmentImageOmit<ExtArgs> | null
    /**
     * The data used to update ApartmentImages.
     */
    data: XOR<ApartmentImageUpdateManyMutationInput, ApartmentImageUncheckedUpdateManyInput>
    /**
     * Filter which ApartmentImages to update
     */
    where?: ApartmentImageWhereInput
    /**
     * Limit how many ApartmentImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApartmentImage upsert
   */
  export type ApartmentImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApartmentImage
     */
    select?: ApartmentImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApartmentImage
     */
    omit?: ApartmentImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentImageInclude<ExtArgs> | null
    /**
     * The filter to search for the ApartmentImage to update in case it exists.
     */
    where: ApartmentImageWhereUniqueInput
    /**
     * In case the ApartmentImage found by the `where` argument doesn't exist, create a new ApartmentImage with this data.
     */
    create: XOR<ApartmentImageCreateInput, ApartmentImageUncheckedCreateInput>
    /**
     * In case the ApartmentImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApartmentImageUpdateInput, ApartmentImageUncheckedUpdateInput>
  }

  /**
   * ApartmentImage delete
   */
  export type ApartmentImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApartmentImage
     */
    select?: ApartmentImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApartmentImage
     */
    omit?: ApartmentImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentImageInclude<ExtArgs> | null
    /**
     * Filter which ApartmentImage to delete.
     */
    where: ApartmentImageWhereUniqueInput
  }

  /**
   * ApartmentImage deleteMany
   */
  export type ApartmentImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApartmentImages to delete
     */
    where?: ApartmentImageWhereInput
    /**
     * Limit how many ApartmentImages to delete.
     */
    limit?: number
  }

  /**
   * ApartmentImage without action
   */
  export type ApartmentImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApartmentImage
     */
    select?: ApartmentImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApartmentImage
     */
    omit?: ApartmentImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentImageInclude<ExtArgs> | null
  }


  /**
   * Model Amenity
   */

  export type AggregateAmenity = {
    _count: AmenityCountAggregateOutputType | null
    _avg: AmenityAvgAggregateOutputType | null
    _sum: AmenitySumAggregateOutputType | null
    _min: AmenityMinAggregateOutputType | null
    _max: AmenityMaxAggregateOutputType | null
  }

  export type AmenityAvgAggregateOutputType = {
    id: number | null
  }

  export type AmenitySumAggregateOutputType = {
    id: number | null
  }

  export type AmenityMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type AmenityMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type AmenityCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type AmenityAvgAggregateInputType = {
    id?: true
  }

  export type AmenitySumAggregateInputType = {
    id?: true
  }

  export type AmenityMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type AmenityMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type AmenityCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type AmenityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Amenity to aggregate.
     */
    where?: AmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amenities to fetch.
     */
    orderBy?: AmenityOrderByWithRelationInput | AmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Amenities
    **/
    _count?: true | AmenityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AmenityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AmenitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AmenityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AmenityMaxAggregateInputType
  }

  export type GetAmenityAggregateType<T extends AmenityAggregateArgs> = {
        [P in keyof T & keyof AggregateAmenity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAmenity[P]>
      : GetScalarType<T[P], AggregateAmenity[P]>
  }




  export type AmenityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AmenityWhereInput
    orderBy?: AmenityOrderByWithAggregationInput | AmenityOrderByWithAggregationInput[]
    by: AmenityScalarFieldEnum[] | AmenityScalarFieldEnum
    having?: AmenityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AmenityCountAggregateInputType | true
    _avg?: AmenityAvgAggregateInputType
    _sum?: AmenitySumAggregateInputType
    _min?: AmenityMinAggregateInputType
    _max?: AmenityMaxAggregateInputType
  }

  export type AmenityGroupByOutputType = {
    id: number
    name: string
    _count: AmenityCountAggregateOutputType | null
    _avg: AmenityAvgAggregateOutputType | null
    _sum: AmenitySumAggregateOutputType | null
    _min: AmenityMinAggregateOutputType | null
    _max: AmenityMaxAggregateOutputType | null
  }

  type GetAmenityGroupByPayload<T extends AmenityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AmenityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AmenityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AmenityGroupByOutputType[P]>
            : GetScalarType<T[P], AmenityGroupByOutputType[P]>
        }
      >
    >


  export type AmenitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    apartments?: boolean | Amenity$apartmentsArgs<ExtArgs>
    _count?: boolean | AmenityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["amenity"]>

  export type AmenitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["amenity"]>

  export type AmenitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["amenity"]>

  export type AmenitySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type AmenityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["amenity"]>
  export type AmenityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apartments?: boolean | Amenity$apartmentsArgs<ExtArgs>
    _count?: boolean | AmenityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AmenityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AmenityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AmenityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Amenity"
    objects: {
      apartments: Prisma.$ApartmentAmenityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["amenity"]>
    composites: {}
  }

  type AmenityGetPayload<S extends boolean | null | undefined | AmenityDefaultArgs> = $Result.GetResult<Prisma.$AmenityPayload, S>

  type AmenityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AmenityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AmenityCountAggregateInputType | true
    }

  export interface AmenityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Amenity'], meta: { name: 'Amenity' } }
    /**
     * Find zero or one Amenity that matches the filter.
     * @param {AmenityFindUniqueArgs} args - Arguments to find a Amenity
     * @example
     * // Get one Amenity
     * const amenity = await prisma.amenity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AmenityFindUniqueArgs>(args: SelectSubset<T, AmenityFindUniqueArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Amenity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AmenityFindUniqueOrThrowArgs} args - Arguments to find a Amenity
     * @example
     * // Get one Amenity
     * const amenity = await prisma.amenity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AmenityFindUniqueOrThrowArgs>(args: SelectSubset<T, AmenityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Amenity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityFindFirstArgs} args - Arguments to find a Amenity
     * @example
     * // Get one Amenity
     * const amenity = await prisma.amenity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AmenityFindFirstArgs>(args?: SelectSubset<T, AmenityFindFirstArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Amenity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityFindFirstOrThrowArgs} args - Arguments to find a Amenity
     * @example
     * // Get one Amenity
     * const amenity = await prisma.amenity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AmenityFindFirstOrThrowArgs>(args?: SelectSubset<T, AmenityFindFirstOrThrowArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Amenities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Amenities
     * const amenities = await prisma.amenity.findMany()
     * 
     * // Get first 10 Amenities
     * const amenities = await prisma.amenity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const amenityWithIdOnly = await prisma.amenity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AmenityFindManyArgs>(args?: SelectSubset<T, AmenityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Amenity.
     * @param {AmenityCreateArgs} args - Arguments to create a Amenity.
     * @example
     * // Create one Amenity
     * const Amenity = await prisma.amenity.create({
     *   data: {
     *     // ... data to create a Amenity
     *   }
     * })
     * 
     */
    create<T extends AmenityCreateArgs>(args: SelectSubset<T, AmenityCreateArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Amenities.
     * @param {AmenityCreateManyArgs} args - Arguments to create many Amenities.
     * @example
     * // Create many Amenities
     * const amenity = await prisma.amenity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AmenityCreateManyArgs>(args?: SelectSubset<T, AmenityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Amenities and returns the data saved in the database.
     * @param {AmenityCreateManyAndReturnArgs} args - Arguments to create many Amenities.
     * @example
     * // Create many Amenities
     * const amenity = await prisma.amenity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Amenities and only return the `id`
     * const amenityWithIdOnly = await prisma.amenity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AmenityCreateManyAndReturnArgs>(args?: SelectSubset<T, AmenityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Amenity.
     * @param {AmenityDeleteArgs} args - Arguments to delete one Amenity.
     * @example
     * // Delete one Amenity
     * const Amenity = await prisma.amenity.delete({
     *   where: {
     *     // ... filter to delete one Amenity
     *   }
     * })
     * 
     */
    delete<T extends AmenityDeleteArgs>(args: SelectSubset<T, AmenityDeleteArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Amenity.
     * @param {AmenityUpdateArgs} args - Arguments to update one Amenity.
     * @example
     * // Update one Amenity
     * const amenity = await prisma.amenity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AmenityUpdateArgs>(args: SelectSubset<T, AmenityUpdateArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Amenities.
     * @param {AmenityDeleteManyArgs} args - Arguments to filter Amenities to delete.
     * @example
     * // Delete a few Amenities
     * const { count } = await prisma.amenity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AmenityDeleteManyArgs>(args?: SelectSubset<T, AmenityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Amenities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Amenities
     * const amenity = await prisma.amenity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AmenityUpdateManyArgs>(args: SelectSubset<T, AmenityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Amenities and returns the data updated in the database.
     * @param {AmenityUpdateManyAndReturnArgs} args - Arguments to update many Amenities.
     * @example
     * // Update many Amenities
     * const amenity = await prisma.amenity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Amenities and only return the `id`
     * const amenityWithIdOnly = await prisma.amenity.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AmenityUpdateManyAndReturnArgs>(args: SelectSubset<T, AmenityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Amenity.
     * @param {AmenityUpsertArgs} args - Arguments to update or create a Amenity.
     * @example
     * // Update or create a Amenity
     * const amenity = await prisma.amenity.upsert({
     *   create: {
     *     // ... data to create a Amenity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Amenity we want to update
     *   }
     * })
     */
    upsert<T extends AmenityUpsertArgs>(args: SelectSubset<T, AmenityUpsertArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Amenities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityCountArgs} args - Arguments to filter Amenities to count.
     * @example
     * // Count the number of Amenities
     * const count = await prisma.amenity.count({
     *   where: {
     *     // ... the filter for the Amenities we want to count
     *   }
     * })
    **/
    count<T extends AmenityCountArgs>(
      args?: Subset<T, AmenityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AmenityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Amenity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AmenityAggregateArgs>(args: Subset<T, AmenityAggregateArgs>): Prisma.PrismaPromise<GetAmenityAggregateType<T>>

    /**
     * Group by Amenity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AmenityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AmenityGroupByArgs['orderBy'] }
        : { orderBy?: AmenityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AmenityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAmenityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Amenity model
   */
  readonly fields: AmenityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Amenity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AmenityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    apartments<T extends Amenity$apartmentsArgs<ExtArgs> = {}>(args?: Subset<T, Amenity$apartmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApartmentAmenityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Amenity model
   */
  interface AmenityFieldRefs {
    readonly id: FieldRef<"Amenity", 'Int'>
    readonly name: FieldRef<"Amenity", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Amenity findUnique
   */
  export type AmenityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter, which Amenity to fetch.
     */
    where: AmenityWhereUniqueInput
  }

  /**
   * Amenity findUniqueOrThrow
   */
  export type AmenityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter, which Amenity to fetch.
     */
    where: AmenityWhereUniqueInput
  }

  /**
   * Amenity findFirst
   */
  export type AmenityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter, which Amenity to fetch.
     */
    where?: AmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amenities to fetch.
     */
    orderBy?: AmenityOrderByWithRelationInput | AmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Amenities.
     */
    cursor?: AmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Amenities.
     */
    distinct?: AmenityScalarFieldEnum | AmenityScalarFieldEnum[]
  }

  /**
   * Amenity findFirstOrThrow
   */
  export type AmenityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter, which Amenity to fetch.
     */
    where?: AmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amenities to fetch.
     */
    orderBy?: AmenityOrderByWithRelationInput | AmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Amenities.
     */
    cursor?: AmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Amenities.
     */
    distinct?: AmenityScalarFieldEnum | AmenityScalarFieldEnum[]
  }

  /**
   * Amenity findMany
   */
  export type AmenityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter, which Amenities to fetch.
     */
    where?: AmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amenities to fetch.
     */
    orderBy?: AmenityOrderByWithRelationInput | AmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Amenities.
     */
    cursor?: AmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amenities.
     */
    skip?: number
    distinct?: AmenityScalarFieldEnum | AmenityScalarFieldEnum[]
  }

  /**
   * Amenity create
   */
  export type AmenityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * The data needed to create a Amenity.
     */
    data: XOR<AmenityCreateInput, AmenityUncheckedCreateInput>
  }

  /**
   * Amenity createMany
   */
  export type AmenityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Amenities.
     */
    data: AmenityCreateManyInput | AmenityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Amenity createManyAndReturn
   */
  export type AmenityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * The data used to create many Amenities.
     */
    data: AmenityCreateManyInput | AmenityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Amenity update
   */
  export type AmenityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * The data needed to update a Amenity.
     */
    data: XOR<AmenityUpdateInput, AmenityUncheckedUpdateInput>
    /**
     * Choose, which Amenity to update.
     */
    where: AmenityWhereUniqueInput
  }

  /**
   * Amenity updateMany
   */
  export type AmenityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Amenities.
     */
    data: XOR<AmenityUpdateManyMutationInput, AmenityUncheckedUpdateManyInput>
    /**
     * Filter which Amenities to update
     */
    where?: AmenityWhereInput
    /**
     * Limit how many Amenities to update.
     */
    limit?: number
  }

  /**
   * Amenity updateManyAndReturn
   */
  export type AmenityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * The data used to update Amenities.
     */
    data: XOR<AmenityUpdateManyMutationInput, AmenityUncheckedUpdateManyInput>
    /**
     * Filter which Amenities to update
     */
    where?: AmenityWhereInput
    /**
     * Limit how many Amenities to update.
     */
    limit?: number
  }

  /**
   * Amenity upsert
   */
  export type AmenityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * The filter to search for the Amenity to update in case it exists.
     */
    where: AmenityWhereUniqueInput
    /**
     * In case the Amenity found by the `where` argument doesn't exist, create a new Amenity with this data.
     */
    create: XOR<AmenityCreateInput, AmenityUncheckedCreateInput>
    /**
     * In case the Amenity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AmenityUpdateInput, AmenityUncheckedUpdateInput>
  }

  /**
   * Amenity delete
   */
  export type AmenityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter which Amenity to delete.
     */
    where: AmenityWhereUniqueInput
  }

  /**
   * Amenity deleteMany
   */
  export type AmenityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Amenities to delete
     */
    where?: AmenityWhereInput
    /**
     * Limit how many Amenities to delete.
     */
    limit?: number
  }

  /**
   * Amenity.apartments
   */
  export type Amenity$apartmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApartmentAmenity
     */
    select?: ApartmentAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApartmentAmenity
     */
    omit?: ApartmentAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentAmenityInclude<ExtArgs> | null
    where?: ApartmentAmenityWhereInput
    orderBy?: ApartmentAmenityOrderByWithRelationInput | ApartmentAmenityOrderByWithRelationInput[]
    cursor?: ApartmentAmenityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApartmentAmenityScalarFieldEnum | ApartmentAmenityScalarFieldEnum[]
  }

  /**
   * Amenity without action
   */
  export type AmenityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
  }


  /**
   * Model ApartmentAmenity
   */

  export type AggregateApartmentAmenity = {
    _count: ApartmentAmenityCountAggregateOutputType | null
    _avg: ApartmentAmenityAvgAggregateOutputType | null
    _sum: ApartmentAmenitySumAggregateOutputType | null
    _min: ApartmentAmenityMinAggregateOutputType | null
    _max: ApartmentAmenityMaxAggregateOutputType | null
  }

  export type ApartmentAmenityAvgAggregateOutputType = {
    id: number | null
    apartmentId: number | null
    amenityId: number | null
  }

  export type ApartmentAmenitySumAggregateOutputType = {
    id: number | null
    apartmentId: number | null
    amenityId: number | null
  }

  export type ApartmentAmenityMinAggregateOutputType = {
    id: number | null
    apartmentId: number | null
    amenityId: number | null
  }

  export type ApartmentAmenityMaxAggregateOutputType = {
    id: number | null
    apartmentId: number | null
    amenityId: number | null
  }

  export type ApartmentAmenityCountAggregateOutputType = {
    id: number
    apartmentId: number
    amenityId: number
    _all: number
  }


  export type ApartmentAmenityAvgAggregateInputType = {
    id?: true
    apartmentId?: true
    amenityId?: true
  }

  export type ApartmentAmenitySumAggregateInputType = {
    id?: true
    apartmentId?: true
    amenityId?: true
  }

  export type ApartmentAmenityMinAggregateInputType = {
    id?: true
    apartmentId?: true
    amenityId?: true
  }

  export type ApartmentAmenityMaxAggregateInputType = {
    id?: true
    apartmentId?: true
    amenityId?: true
  }

  export type ApartmentAmenityCountAggregateInputType = {
    id?: true
    apartmentId?: true
    amenityId?: true
    _all?: true
  }

  export type ApartmentAmenityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApartmentAmenity to aggregate.
     */
    where?: ApartmentAmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApartmentAmenities to fetch.
     */
    orderBy?: ApartmentAmenityOrderByWithRelationInput | ApartmentAmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApartmentAmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApartmentAmenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApartmentAmenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApartmentAmenities
    **/
    _count?: true | ApartmentAmenityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApartmentAmenityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApartmentAmenitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApartmentAmenityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApartmentAmenityMaxAggregateInputType
  }

  export type GetApartmentAmenityAggregateType<T extends ApartmentAmenityAggregateArgs> = {
        [P in keyof T & keyof AggregateApartmentAmenity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApartmentAmenity[P]>
      : GetScalarType<T[P], AggregateApartmentAmenity[P]>
  }




  export type ApartmentAmenityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApartmentAmenityWhereInput
    orderBy?: ApartmentAmenityOrderByWithAggregationInput | ApartmentAmenityOrderByWithAggregationInput[]
    by: ApartmentAmenityScalarFieldEnum[] | ApartmentAmenityScalarFieldEnum
    having?: ApartmentAmenityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApartmentAmenityCountAggregateInputType | true
    _avg?: ApartmentAmenityAvgAggregateInputType
    _sum?: ApartmentAmenitySumAggregateInputType
    _min?: ApartmentAmenityMinAggregateInputType
    _max?: ApartmentAmenityMaxAggregateInputType
  }

  export type ApartmentAmenityGroupByOutputType = {
    id: number
    apartmentId: number
    amenityId: number
    _count: ApartmentAmenityCountAggregateOutputType | null
    _avg: ApartmentAmenityAvgAggregateOutputType | null
    _sum: ApartmentAmenitySumAggregateOutputType | null
    _min: ApartmentAmenityMinAggregateOutputType | null
    _max: ApartmentAmenityMaxAggregateOutputType | null
  }

  type GetApartmentAmenityGroupByPayload<T extends ApartmentAmenityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApartmentAmenityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApartmentAmenityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApartmentAmenityGroupByOutputType[P]>
            : GetScalarType<T[P], ApartmentAmenityGroupByOutputType[P]>
        }
      >
    >


  export type ApartmentAmenitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apartmentId?: boolean
    amenityId?: boolean
    apartment?: boolean | ApartmentDefaultArgs<ExtArgs>
    amenity?: boolean | AmenityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apartmentAmenity"]>

  export type ApartmentAmenitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apartmentId?: boolean
    amenityId?: boolean
    apartment?: boolean | ApartmentDefaultArgs<ExtArgs>
    amenity?: boolean | AmenityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apartmentAmenity"]>

  export type ApartmentAmenitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apartmentId?: boolean
    amenityId?: boolean
    apartment?: boolean | ApartmentDefaultArgs<ExtArgs>
    amenity?: boolean | AmenityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apartmentAmenity"]>

  export type ApartmentAmenitySelectScalar = {
    id?: boolean
    apartmentId?: boolean
    amenityId?: boolean
  }

  export type ApartmentAmenityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "apartmentId" | "amenityId", ExtArgs["result"]["apartmentAmenity"]>
  export type ApartmentAmenityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apartment?: boolean | ApartmentDefaultArgs<ExtArgs>
    amenity?: boolean | AmenityDefaultArgs<ExtArgs>
  }
  export type ApartmentAmenityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apartment?: boolean | ApartmentDefaultArgs<ExtArgs>
    amenity?: boolean | AmenityDefaultArgs<ExtArgs>
  }
  export type ApartmentAmenityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apartment?: boolean | ApartmentDefaultArgs<ExtArgs>
    amenity?: boolean | AmenityDefaultArgs<ExtArgs>
  }

  export type $ApartmentAmenityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApartmentAmenity"
    objects: {
      apartment: Prisma.$ApartmentPayload<ExtArgs>
      amenity: Prisma.$AmenityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      apartmentId: number
      amenityId: number
    }, ExtArgs["result"]["apartmentAmenity"]>
    composites: {}
  }

  type ApartmentAmenityGetPayload<S extends boolean | null | undefined | ApartmentAmenityDefaultArgs> = $Result.GetResult<Prisma.$ApartmentAmenityPayload, S>

  type ApartmentAmenityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApartmentAmenityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApartmentAmenityCountAggregateInputType | true
    }

  export interface ApartmentAmenityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApartmentAmenity'], meta: { name: 'ApartmentAmenity' } }
    /**
     * Find zero or one ApartmentAmenity that matches the filter.
     * @param {ApartmentAmenityFindUniqueArgs} args - Arguments to find a ApartmentAmenity
     * @example
     * // Get one ApartmentAmenity
     * const apartmentAmenity = await prisma.apartmentAmenity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApartmentAmenityFindUniqueArgs>(args: SelectSubset<T, ApartmentAmenityFindUniqueArgs<ExtArgs>>): Prisma__ApartmentAmenityClient<$Result.GetResult<Prisma.$ApartmentAmenityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApartmentAmenity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApartmentAmenityFindUniqueOrThrowArgs} args - Arguments to find a ApartmentAmenity
     * @example
     * // Get one ApartmentAmenity
     * const apartmentAmenity = await prisma.apartmentAmenity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApartmentAmenityFindUniqueOrThrowArgs>(args: SelectSubset<T, ApartmentAmenityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApartmentAmenityClient<$Result.GetResult<Prisma.$ApartmentAmenityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApartmentAmenity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentAmenityFindFirstArgs} args - Arguments to find a ApartmentAmenity
     * @example
     * // Get one ApartmentAmenity
     * const apartmentAmenity = await prisma.apartmentAmenity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApartmentAmenityFindFirstArgs>(args?: SelectSubset<T, ApartmentAmenityFindFirstArgs<ExtArgs>>): Prisma__ApartmentAmenityClient<$Result.GetResult<Prisma.$ApartmentAmenityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApartmentAmenity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentAmenityFindFirstOrThrowArgs} args - Arguments to find a ApartmentAmenity
     * @example
     * // Get one ApartmentAmenity
     * const apartmentAmenity = await prisma.apartmentAmenity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApartmentAmenityFindFirstOrThrowArgs>(args?: SelectSubset<T, ApartmentAmenityFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApartmentAmenityClient<$Result.GetResult<Prisma.$ApartmentAmenityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApartmentAmenities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentAmenityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApartmentAmenities
     * const apartmentAmenities = await prisma.apartmentAmenity.findMany()
     * 
     * // Get first 10 ApartmentAmenities
     * const apartmentAmenities = await prisma.apartmentAmenity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apartmentAmenityWithIdOnly = await prisma.apartmentAmenity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApartmentAmenityFindManyArgs>(args?: SelectSubset<T, ApartmentAmenityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApartmentAmenityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApartmentAmenity.
     * @param {ApartmentAmenityCreateArgs} args - Arguments to create a ApartmentAmenity.
     * @example
     * // Create one ApartmentAmenity
     * const ApartmentAmenity = await prisma.apartmentAmenity.create({
     *   data: {
     *     // ... data to create a ApartmentAmenity
     *   }
     * })
     * 
     */
    create<T extends ApartmentAmenityCreateArgs>(args: SelectSubset<T, ApartmentAmenityCreateArgs<ExtArgs>>): Prisma__ApartmentAmenityClient<$Result.GetResult<Prisma.$ApartmentAmenityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApartmentAmenities.
     * @param {ApartmentAmenityCreateManyArgs} args - Arguments to create many ApartmentAmenities.
     * @example
     * // Create many ApartmentAmenities
     * const apartmentAmenity = await prisma.apartmentAmenity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApartmentAmenityCreateManyArgs>(args?: SelectSubset<T, ApartmentAmenityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApartmentAmenities and returns the data saved in the database.
     * @param {ApartmentAmenityCreateManyAndReturnArgs} args - Arguments to create many ApartmentAmenities.
     * @example
     * // Create many ApartmentAmenities
     * const apartmentAmenity = await prisma.apartmentAmenity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApartmentAmenities and only return the `id`
     * const apartmentAmenityWithIdOnly = await prisma.apartmentAmenity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApartmentAmenityCreateManyAndReturnArgs>(args?: SelectSubset<T, ApartmentAmenityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApartmentAmenityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApartmentAmenity.
     * @param {ApartmentAmenityDeleteArgs} args - Arguments to delete one ApartmentAmenity.
     * @example
     * // Delete one ApartmentAmenity
     * const ApartmentAmenity = await prisma.apartmentAmenity.delete({
     *   where: {
     *     // ... filter to delete one ApartmentAmenity
     *   }
     * })
     * 
     */
    delete<T extends ApartmentAmenityDeleteArgs>(args: SelectSubset<T, ApartmentAmenityDeleteArgs<ExtArgs>>): Prisma__ApartmentAmenityClient<$Result.GetResult<Prisma.$ApartmentAmenityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApartmentAmenity.
     * @param {ApartmentAmenityUpdateArgs} args - Arguments to update one ApartmentAmenity.
     * @example
     * // Update one ApartmentAmenity
     * const apartmentAmenity = await prisma.apartmentAmenity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApartmentAmenityUpdateArgs>(args: SelectSubset<T, ApartmentAmenityUpdateArgs<ExtArgs>>): Prisma__ApartmentAmenityClient<$Result.GetResult<Prisma.$ApartmentAmenityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApartmentAmenities.
     * @param {ApartmentAmenityDeleteManyArgs} args - Arguments to filter ApartmentAmenities to delete.
     * @example
     * // Delete a few ApartmentAmenities
     * const { count } = await prisma.apartmentAmenity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApartmentAmenityDeleteManyArgs>(args?: SelectSubset<T, ApartmentAmenityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApartmentAmenities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentAmenityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApartmentAmenities
     * const apartmentAmenity = await prisma.apartmentAmenity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApartmentAmenityUpdateManyArgs>(args: SelectSubset<T, ApartmentAmenityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApartmentAmenities and returns the data updated in the database.
     * @param {ApartmentAmenityUpdateManyAndReturnArgs} args - Arguments to update many ApartmentAmenities.
     * @example
     * // Update many ApartmentAmenities
     * const apartmentAmenity = await prisma.apartmentAmenity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApartmentAmenities and only return the `id`
     * const apartmentAmenityWithIdOnly = await prisma.apartmentAmenity.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApartmentAmenityUpdateManyAndReturnArgs>(args: SelectSubset<T, ApartmentAmenityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApartmentAmenityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApartmentAmenity.
     * @param {ApartmentAmenityUpsertArgs} args - Arguments to update or create a ApartmentAmenity.
     * @example
     * // Update or create a ApartmentAmenity
     * const apartmentAmenity = await prisma.apartmentAmenity.upsert({
     *   create: {
     *     // ... data to create a ApartmentAmenity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApartmentAmenity we want to update
     *   }
     * })
     */
    upsert<T extends ApartmentAmenityUpsertArgs>(args: SelectSubset<T, ApartmentAmenityUpsertArgs<ExtArgs>>): Prisma__ApartmentAmenityClient<$Result.GetResult<Prisma.$ApartmentAmenityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApartmentAmenities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentAmenityCountArgs} args - Arguments to filter ApartmentAmenities to count.
     * @example
     * // Count the number of ApartmentAmenities
     * const count = await prisma.apartmentAmenity.count({
     *   where: {
     *     // ... the filter for the ApartmentAmenities we want to count
     *   }
     * })
    **/
    count<T extends ApartmentAmenityCountArgs>(
      args?: Subset<T, ApartmentAmenityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApartmentAmenityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApartmentAmenity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentAmenityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApartmentAmenityAggregateArgs>(args: Subset<T, ApartmentAmenityAggregateArgs>): Prisma.PrismaPromise<GetApartmentAmenityAggregateType<T>>

    /**
     * Group by ApartmentAmenity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentAmenityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApartmentAmenityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApartmentAmenityGroupByArgs['orderBy'] }
        : { orderBy?: ApartmentAmenityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApartmentAmenityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApartmentAmenityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApartmentAmenity model
   */
  readonly fields: ApartmentAmenityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApartmentAmenity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApartmentAmenityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    apartment<T extends ApartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApartmentDefaultArgs<ExtArgs>>): Prisma__ApartmentClient<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    amenity<T extends AmenityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AmenityDefaultArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApartmentAmenity model
   */
  interface ApartmentAmenityFieldRefs {
    readonly id: FieldRef<"ApartmentAmenity", 'Int'>
    readonly apartmentId: FieldRef<"ApartmentAmenity", 'Int'>
    readonly amenityId: FieldRef<"ApartmentAmenity", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ApartmentAmenity findUnique
   */
  export type ApartmentAmenityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApartmentAmenity
     */
    select?: ApartmentAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApartmentAmenity
     */
    omit?: ApartmentAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentAmenityInclude<ExtArgs> | null
    /**
     * Filter, which ApartmentAmenity to fetch.
     */
    where: ApartmentAmenityWhereUniqueInput
  }

  /**
   * ApartmentAmenity findUniqueOrThrow
   */
  export type ApartmentAmenityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApartmentAmenity
     */
    select?: ApartmentAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApartmentAmenity
     */
    omit?: ApartmentAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentAmenityInclude<ExtArgs> | null
    /**
     * Filter, which ApartmentAmenity to fetch.
     */
    where: ApartmentAmenityWhereUniqueInput
  }

  /**
   * ApartmentAmenity findFirst
   */
  export type ApartmentAmenityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApartmentAmenity
     */
    select?: ApartmentAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApartmentAmenity
     */
    omit?: ApartmentAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentAmenityInclude<ExtArgs> | null
    /**
     * Filter, which ApartmentAmenity to fetch.
     */
    where?: ApartmentAmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApartmentAmenities to fetch.
     */
    orderBy?: ApartmentAmenityOrderByWithRelationInput | ApartmentAmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApartmentAmenities.
     */
    cursor?: ApartmentAmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApartmentAmenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApartmentAmenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApartmentAmenities.
     */
    distinct?: ApartmentAmenityScalarFieldEnum | ApartmentAmenityScalarFieldEnum[]
  }

  /**
   * ApartmentAmenity findFirstOrThrow
   */
  export type ApartmentAmenityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApartmentAmenity
     */
    select?: ApartmentAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApartmentAmenity
     */
    omit?: ApartmentAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentAmenityInclude<ExtArgs> | null
    /**
     * Filter, which ApartmentAmenity to fetch.
     */
    where?: ApartmentAmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApartmentAmenities to fetch.
     */
    orderBy?: ApartmentAmenityOrderByWithRelationInput | ApartmentAmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApartmentAmenities.
     */
    cursor?: ApartmentAmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApartmentAmenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApartmentAmenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApartmentAmenities.
     */
    distinct?: ApartmentAmenityScalarFieldEnum | ApartmentAmenityScalarFieldEnum[]
  }

  /**
   * ApartmentAmenity findMany
   */
  export type ApartmentAmenityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApartmentAmenity
     */
    select?: ApartmentAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApartmentAmenity
     */
    omit?: ApartmentAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentAmenityInclude<ExtArgs> | null
    /**
     * Filter, which ApartmentAmenities to fetch.
     */
    where?: ApartmentAmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApartmentAmenities to fetch.
     */
    orderBy?: ApartmentAmenityOrderByWithRelationInput | ApartmentAmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApartmentAmenities.
     */
    cursor?: ApartmentAmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApartmentAmenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApartmentAmenities.
     */
    skip?: number
    distinct?: ApartmentAmenityScalarFieldEnum | ApartmentAmenityScalarFieldEnum[]
  }

  /**
   * ApartmentAmenity create
   */
  export type ApartmentAmenityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApartmentAmenity
     */
    select?: ApartmentAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApartmentAmenity
     */
    omit?: ApartmentAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentAmenityInclude<ExtArgs> | null
    /**
     * The data needed to create a ApartmentAmenity.
     */
    data: XOR<ApartmentAmenityCreateInput, ApartmentAmenityUncheckedCreateInput>
  }

  /**
   * ApartmentAmenity createMany
   */
  export type ApartmentAmenityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApartmentAmenities.
     */
    data: ApartmentAmenityCreateManyInput | ApartmentAmenityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApartmentAmenity createManyAndReturn
   */
  export type ApartmentAmenityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApartmentAmenity
     */
    select?: ApartmentAmenitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApartmentAmenity
     */
    omit?: ApartmentAmenityOmit<ExtArgs> | null
    /**
     * The data used to create many ApartmentAmenities.
     */
    data: ApartmentAmenityCreateManyInput | ApartmentAmenityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentAmenityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApartmentAmenity update
   */
  export type ApartmentAmenityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApartmentAmenity
     */
    select?: ApartmentAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApartmentAmenity
     */
    omit?: ApartmentAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentAmenityInclude<ExtArgs> | null
    /**
     * The data needed to update a ApartmentAmenity.
     */
    data: XOR<ApartmentAmenityUpdateInput, ApartmentAmenityUncheckedUpdateInput>
    /**
     * Choose, which ApartmentAmenity to update.
     */
    where: ApartmentAmenityWhereUniqueInput
  }

  /**
   * ApartmentAmenity updateMany
   */
  export type ApartmentAmenityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApartmentAmenities.
     */
    data: XOR<ApartmentAmenityUpdateManyMutationInput, ApartmentAmenityUncheckedUpdateManyInput>
    /**
     * Filter which ApartmentAmenities to update
     */
    where?: ApartmentAmenityWhereInput
    /**
     * Limit how many ApartmentAmenities to update.
     */
    limit?: number
  }

  /**
   * ApartmentAmenity updateManyAndReturn
   */
  export type ApartmentAmenityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApartmentAmenity
     */
    select?: ApartmentAmenitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApartmentAmenity
     */
    omit?: ApartmentAmenityOmit<ExtArgs> | null
    /**
     * The data used to update ApartmentAmenities.
     */
    data: XOR<ApartmentAmenityUpdateManyMutationInput, ApartmentAmenityUncheckedUpdateManyInput>
    /**
     * Filter which ApartmentAmenities to update
     */
    where?: ApartmentAmenityWhereInput
    /**
     * Limit how many ApartmentAmenities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentAmenityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApartmentAmenity upsert
   */
  export type ApartmentAmenityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApartmentAmenity
     */
    select?: ApartmentAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApartmentAmenity
     */
    omit?: ApartmentAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentAmenityInclude<ExtArgs> | null
    /**
     * The filter to search for the ApartmentAmenity to update in case it exists.
     */
    where: ApartmentAmenityWhereUniqueInput
    /**
     * In case the ApartmentAmenity found by the `where` argument doesn't exist, create a new ApartmentAmenity with this data.
     */
    create: XOR<ApartmentAmenityCreateInput, ApartmentAmenityUncheckedCreateInput>
    /**
     * In case the ApartmentAmenity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApartmentAmenityUpdateInput, ApartmentAmenityUncheckedUpdateInput>
  }

  /**
   * ApartmentAmenity delete
   */
  export type ApartmentAmenityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApartmentAmenity
     */
    select?: ApartmentAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApartmentAmenity
     */
    omit?: ApartmentAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentAmenityInclude<ExtArgs> | null
    /**
     * Filter which ApartmentAmenity to delete.
     */
    where: ApartmentAmenityWhereUniqueInput
  }

  /**
   * ApartmentAmenity deleteMany
   */
  export type ApartmentAmenityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApartmentAmenities to delete
     */
    where?: ApartmentAmenityWhereInput
    /**
     * Limit how many ApartmentAmenities to delete.
     */
    limit?: number
  }

  /**
   * ApartmentAmenity without action
   */
  export type ApartmentAmenityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApartmentAmenity
     */
    select?: ApartmentAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApartmentAmenity
     */
    omit?: ApartmentAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentAmenityInclude<ExtArgs> | null
  }


  /**
   * Model Guest
   */

  export type AggregateGuest = {
    _count: GuestCountAggregateOutputType | null
    _avg: GuestAvgAggregateOutputType | null
    _sum: GuestSumAggregateOutputType | null
    _min: GuestMinAggregateOutputType | null
    _max: GuestMaxAggregateOutputType | null
  }

  export type GuestAvgAggregateOutputType = {
    id: number | null
  }

  export type GuestSumAggregateOutputType = {
    id: number | null
  }

  export type GuestMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
  }

  export type GuestMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
  }

  export type GuestCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    phone: number
    _all: number
  }


  export type GuestAvgAggregateInputType = {
    id?: true
  }

  export type GuestSumAggregateInputType = {
    id?: true
  }

  export type GuestMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
  }

  export type GuestMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
  }

  export type GuestCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    _all?: true
  }

  export type GuestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guest to aggregate.
     */
    where?: GuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guests to fetch.
     */
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Guests
    **/
    _count?: true | GuestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GuestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GuestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuestMaxAggregateInputType
  }

  export type GetGuestAggregateType<T extends GuestAggregateArgs> = {
        [P in keyof T & keyof AggregateGuest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuest[P]>
      : GetScalarType<T[P], AggregateGuest[P]>
  }




  export type GuestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuestWhereInput
    orderBy?: GuestOrderByWithAggregationInput | GuestOrderByWithAggregationInput[]
    by: GuestScalarFieldEnum[] | GuestScalarFieldEnum
    having?: GuestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuestCountAggregateInputType | true
    _avg?: GuestAvgAggregateInputType
    _sum?: GuestSumAggregateInputType
    _min?: GuestMinAggregateInputType
    _max?: GuestMaxAggregateInputType
  }

  export type GuestGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    email: string
    phone: string | null
    _count: GuestCountAggregateOutputType | null
    _avg: GuestAvgAggregateOutputType | null
    _sum: GuestSumAggregateOutputType | null
    _min: GuestMinAggregateOutputType | null
    _max: GuestMaxAggregateOutputType | null
  }

  type GetGuestGroupByPayload<T extends GuestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuestGroupByOutputType[P]>
            : GetScalarType<T[P], GuestGroupByOutputType[P]>
        }
      >
    >


  export type GuestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    bookings?: boolean | Guest$bookingsArgs<ExtArgs>
    _count?: boolean | GuestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guest"]>

  export type GuestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
  }, ExtArgs["result"]["guest"]>

  export type GuestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
  }, ExtArgs["result"]["guest"]>

  export type GuestSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
  }

  export type GuestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "phone", ExtArgs["result"]["guest"]>
  export type GuestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | Guest$bookingsArgs<ExtArgs>
    _count?: boolean | GuestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GuestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GuestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GuestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Guest"
    objects: {
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      email: string
      phone: string | null
    }, ExtArgs["result"]["guest"]>
    composites: {}
  }

  type GuestGetPayload<S extends boolean | null | undefined | GuestDefaultArgs> = $Result.GetResult<Prisma.$GuestPayload, S>

  type GuestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuestCountAggregateInputType | true
    }

  export interface GuestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Guest'], meta: { name: 'Guest' } }
    /**
     * Find zero or one Guest that matches the filter.
     * @param {GuestFindUniqueArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuestFindUniqueArgs>(args: SelectSubset<T, GuestFindUniqueArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Guest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuestFindUniqueOrThrowArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuestFindUniqueOrThrowArgs>(args: SelectSubset<T, GuestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestFindFirstArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuestFindFirstArgs>(args?: SelectSubset<T, GuestFindFirstArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestFindFirstOrThrowArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuestFindFirstOrThrowArgs>(args?: SelectSubset<T, GuestFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Guests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Guests
     * const guests = await prisma.guest.findMany()
     * 
     * // Get first 10 Guests
     * const guests = await prisma.guest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guestWithIdOnly = await prisma.guest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuestFindManyArgs>(args?: SelectSubset<T, GuestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Guest.
     * @param {GuestCreateArgs} args - Arguments to create a Guest.
     * @example
     * // Create one Guest
     * const Guest = await prisma.guest.create({
     *   data: {
     *     // ... data to create a Guest
     *   }
     * })
     * 
     */
    create<T extends GuestCreateArgs>(args: SelectSubset<T, GuestCreateArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Guests.
     * @param {GuestCreateManyArgs} args - Arguments to create many Guests.
     * @example
     * // Create many Guests
     * const guest = await prisma.guest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuestCreateManyArgs>(args?: SelectSubset<T, GuestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Guests and returns the data saved in the database.
     * @param {GuestCreateManyAndReturnArgs} args - Arguments to create many Guests.
     * @example
     * // Create many Guests
     * const guest = await prisma.guest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Guests and only return the `id`
     * const guestWithIdOnly = await prisma.guest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuestCreateManyAndReturnArgs>(args?: SelectSubset<T, GuestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Guest.
     * @param {GuestDeleteArgs} args - Arguments to delete one Guest.
     * @example
     * // Delete one Guest
     * const Guest = await prisma.guest.delete({
     *   where: {
     *     // ... filter to delete one Guest
     *   }
     * })
     * 
     */
    delete<T extends GuestDeleteArgs>(args: SelectSubset<T, GuestDeleteArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Guest.
     * @param {GuestUpdateArgs} args - Arguments to update one Guest.
     * @example
     * // Update one Guest
     * const guest = await prisma.guest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuestUpdateArgs>(args: SelectSubset<T, GuestUpdateArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Guests.
     * @param {GuestDeleteManyArgs} args - Arguments to filter Guests to delete.
     * @example
     * // Delete a few Guests
     * const { count } = await prisma.guest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuestDeleteManyArgs>(args?: SelectSubset<T, GuestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Guests
     * const guest = await prisma.guest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuestUpdateManyArgs>(args: SelectSubset<T, GuestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guests and returns the data updated in the database.
     * @param {GuestUpdateManyAndReturnArgs} args - Arguments to update many Guests.
     * @example
     * // Update many Guests
     * const guest = await prisma.guest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Guests and only return the `id`
     * const guestWithIdOnly = await prisma.guest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GuestUpdateManyAndReturnArgs>(args: SelectSubset<T, GuestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Guest.
     * @param {GuestUpsertArgs} args - Arguments to update or create a Guest.
     * @example
     * // Update or create a Guest
     * const guest = await prisma.guest.upsert({
     *   create: {
     *     // ... data to create a Guest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Guest we want to update
     *   }
     * })
     */
    upsert<T extends GuestUpsertArgs>(args: SelectSubset<T, GuestUpsertArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Guests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestCountArgs} args - Arguments to filter Guests to count.
     * @example
     * // Count the number of Guests
     * const count = await prisma.guest.count({
     *   where: {
     *     // ... the filter for the Guests we want to count
     *   }
     * })
    **/
    count<T extends GuestCountArgs>(
      args?: Subset<T, GuestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Guest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GuestAggregateArgs>(args: Subset<T, GuestAggregateArgs>): Prisma.PrismaPromise<GetGuestAggregateType<T>>

    /**
     * Group by Guest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GuestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuestGroupByArgs['orderBy'] }
        : { orderBy?: GuestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GuestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Guest model
   */
  readonly fields: GuestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Guest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends Guest$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Guest$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Guest model
   */
  interface GuestFieldRefs {
    readonly id: FieldRef<"Guest", 'Int'>
    readonly firstName: FieldRef<"Guest", 'String'>
    readonly lastName: FieldRef<"Guest", 'String'>
    readonly email: FieldRef<"Guest", 'String'>
    readonly phone: FieldRef<"Guest", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Guest findUnique
   */
  export type GuestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guest to fetch.
     */
    where: GuestWhereUniqueInput
  }

  /**
   * Guest findUniqueOrThrow
   */
  export type GuestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guest to fetch.
     */
    where: GuestWhereUniqueInput
  }

  /**
   * Guest findFirst
   */
  export type GuestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guest to fetch.
     */
    where?: GuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guests to fetch.
     */
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guests.
     */
    cursor?: GuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guests.
     */
    distinct?: GuestScalarFieldEnum | GuestScalarFieldEnum[]
  }

  /**
   * Guest findFirstOrThrow
   */
  export type GuestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guest to fetch.
     */
    where?: GuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guests to fetch.
     */
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guests.
     */
    cursor?: GuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guests.
     */
    distinct?: GuestScalarFieldEnum | GuestScalarFieldEnum[]
  }

  /**
   * Guest findMany
   */
  export type GuestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guests to fetch.
     */
    where?: GuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guests to fetch.
     */
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Guests.
     */
    cursor?: GuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guests.
     */
    skip?: number
    distinct?: GuestScalarFieldEnum | GuestScalarFieldEnum[]
  }

  /**
   * Guest create
   */
  export type GuestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * The data needed to create a Guest.
     */
    data: XOR<GuestCreateInput, GuestUncheckedCreateInput>
  }

  /**
   * Guest createMany
   */
  export type GuestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Guests.
     */
    data: GuestCreateManyInput | GuestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Guest createManyAndReturn
   */
  export type GuestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * The data used to create many Guests.
     */
    data: GuestCreateManyInput | GuestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Guest update
   */
  export type GuestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * The data needed to update a Guest.
     */
    data: XOR<GuestUpdateInput, GuestUncheckedUpdateInput>
    /**
     * Choose, which Guest to update.
     */
    where: GuestWhereUniqueInput
  }

  /**
   * Guest updateMany
   */
  export type GuestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Guests.
     */
    data: XOR<GuestUpdateManyMutationInput, GuestUncheckedUpdateManyInput>
    /**
     * Filter which Guests to update
     */
    where?: GuestWhereInput
    /**
     * Limit how many Guests to update.
     */
    limit?: number
  }

  /**
   * Guest updateManyAndReturn
   */
  export type GuestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * The data used to update Guests.
     */
    data: XOR<GuestUpdateManyMutationInput, GuestUncheckedUpdateManyInput>
    /**
     * Filter which Guests to update
     */
    where?: GuestWhereInput
    /**
     * Limit how many Guests to update.
     */
    limit?: number
  }

  /**
   * Guest upsert
   */
  export type GuestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * The filter to search for the Guest to update in case it exists.
     */
    where: GuestWhereUniqueInput
    /**
     * In case the Guest found by the `where` argument doesn't exist, create a new Guest with this data.
     */
    create: XOR<GuestCreateInput, GuestUncheckedCreateInput>
    /**
     * In case the Guest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuestUpdateInput, GuestUncheckedUpdateInput>
  }

  /**
   * Guest delete
   */
  export type GuestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter which Guest to delete.
     */
    where: GuestWhereUniqueInput
  }

  /**
   * Guest deleteMany
   */
  export type GuestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guests to delete
     */
    where?: GuestWhereInput
    /**
     * Limit how many Guests to delete.
     */
    limit?: number
  }

  /**
   * Guest.bookings
   */
  export type Guest$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Guest without action
   */
  export type GuestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    id: number | null
    guestId: number | null
    apartmentId: number | null
    guests: number | null
    totalAmount: number | null
  }

  export type BookingSumAggregateOutputType = {
    id: number | null
    guestId: number | null
    apartmentId: number | null
    guests: number | null
    totalAmount: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: number | null
    guestId: number | null
    apartmentId: number | null
    checkIn: Date | null
    checkOut: Date | null
    guests: number | null
    totalAmount: number | null
    notes: string | null
    status: string | null
    createdAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: number | null
    guestId: number | null
    apartmentId: number | null
    checkIn: Date | null
    checkOut: Date | null
    guests: number | null
    totalAmount: number | null
    notes: string | null
    status: string | null
    createdAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    guestId: number
    apartmentId: number
    checkIn: number
    checkOut: number
    guests: number
    totalAmount: number
    notes: number
    status: number
    createdAt: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    id?: true
    guestId?: true
    apartmentId?: true
    guests?: true
    totalAmount?: true
  }

  export type BookingSumAggregateInputType = {
    id?: true
    guestId?: true
    apartmentId?: true
    guests?: true
    totalAmount?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    guestId?: true
    apartmentId?: true
    checkIn?: true
    checkOut?: true
    guests?: true
    totalAmount?: true
    notes?: true
    status?: true
    createdAt?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    guestId?: true
    apartmentId?: true
    checkIn?: true
    checkOut?: true
    guests?: true
    totalAmount?: true
    notes?: true
    status?: true
    createdAt?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    guestId?: true
    apartmentId?: true
    checkIn?: true
    checkOut?: true
    guests?: true
    totalAmount?: true
    notes?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: number
    guestId: number
    apartmentId: number
    checkIn: Date
    checkOut: Date
    guests: number
    totalAmount: number
    notes: string | null
    status: string
    createdAt: Date
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guestId?: boolean
    apartmentId?: boolean
    checkIn?: boolean
    checkOut?: boolean
    guests?: boolean
    totalAmount?: boolean
    notes?: boolean
    status?: boolean
    createdAt?: boolean
    guest?: boolean | GuestDefaultArgs<ExtArgs>
    apartment?: boolean | ApartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guestId?: boolean
    apartmentId?: boolean
    checkIn?: boolean
    checkOut?: boolean
    guests?: boolean
    totalAmount?: boolean
    notes?: boolean
    status?: boolean
    createdAt?: boolean
    guest?: boolean | GuestDefaultArgs<ExtArgs>
    apartment?: boolean | ApartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guestId?: boolean
    apartmentId?: boolean
    checkIn?: boolean
    checkOut?: boolean
    guests?: boolean
    totalAmount?: boolean
    notes?: boolean
    status?: boolean
    createdAt?: boolean
    guest?: boolean | GuestDefaultArgs<ExtArgs>
    apartment?: boolean | ApartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    guestId?: boolean
    apartmentId?: boolean
    checkIn?: boolean
    checkOut?: boolean
    guests?: boolean
    totalAmount?: boolean
    notes?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guestId" | "apartmentId" | "checkIn" | "checkOut" | "guests" | "totalAmount" | "notes" | "status" | "createdAt", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guest?: boolean | GuestDefaultArgs<ExtArgs>
    apartment?: boolean | ApartmentDefaultArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guest?: boolean | GuestDefaultArgs<ExtArgs>
    apartment?: boolean | ApartmentDefaultArgs<ExtArgs>
  }
  export type BookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guest?: boolean | GuestDefaultArgs<ExtArgs>
    apartment?: boolean | ApartmentDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      guest: Prisma.$GuestPayload<ExtArgs>
      apartment: Prisma.$ApartmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      guestId: number
      apartmentId: number
      checkIn: Date
      checkOut: Date
      guests: number
      totalAmount: number
      notes: string | null
      status: string
      createdAt: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    guest<T extends GuestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuestDefaultArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    apartment<T extends ApartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApartmentDefaultArgs<ExtArgs>>): Prisma__ApartmentClient<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'Int'>
    readonly guestId: FieldRef<"Booking", 'Int'>
    readonly apartmentId: FieldRef<"Booking", 'Int'>
    readonly checkIn: FieldRef<"Booking", 'DateTime'>
    readonly checkOut: FieldRef<"Booking", 'DateTime'>
    readonly guests: FieldRef<"Booking", 'Int'>
    readonly totalAmount: FieldRef<"Booking", 'Float'>
    readonly notes: FieldRef<"Booking", 'String'>
    readonly status: FieldRef<"Booking", 'String'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminUserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type AdminUserScalarFieldEnum = (typeof AdminUserScalarFieldEnum)[keyof typeof AdminUserScalarFieldEnum]


  export const ApartmentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    bedrooms: 'bedrooms',
    bathrooms: 'bathrooms',
    maxGuests: 'maxGuests',
    pricePerNight: 'pricePerNight',
    isActive: 'isActive'
  };

  export type ApartmentScalarFieldEnum = (typeof ApartmentScalarFieldEnum)[keyof typeof ApartmentScalarFieldEnum]


  export const ApartmentImageScalarFieldEnum: {
    id: 'id',
    apartmentId: 'apartmentId',
    imageUrl: 'imageUrl',
    altText: 'altText',
    isMain: 'isMain',
    sortOrder: 'sortOrder'
  };

  export type ApartmentImageScalarFieldEnum = (typeof ApartmentImageScalarFieldEnum)[keyof typeof ApartmentImageScalarFieldEnum]


  export const AmenityScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type AmenityScalarFieldEnum = (typeof AmenityScalarFieldEnum)[keyof typeof AmenityScalarFieldEnum]


  export const ApartmentAmenityScalarFieldEnum: {
    id: 'id',
    apartmentId: 'apartmentId',
    amenityId: 'amenityId'
  };

  export type ApartmentAmenityScalarFieldEnum = (typeof ApartmentAmenityScalarFieldEnum)[keyof typeof ApartmentAmenityScalarFieldEnum]


  export const GuestScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone'
  };

  export type GuestScalarFieldEnum = (typeof GuestScalarFieldEnum)[keyof typeof GuestScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    guestId: 'guestId',
    apartmentId: 'apartmentId',
    checkIn: 'checkIn',
    checkOut: 'checkOut',
    guests: 'guests',
    totalAmount: 'totalAmount',
    notes: 'notes',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type AdminUserWhereInput = {
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    id?: IntFilter<"AdminUser"> | number
    username?: StringFilter<"AdminUser"> | string
    password?: StringFilter<"AdminUser"> | string
    createdAt?: DateTimeFilter<"AdminUser"> | Date | string
  }

  export type AdminUserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminUserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    password?: StringFilter<"AdminUser"> | string
    createdAt?: DateTimeFilter<"AdminUser"> | Date | string
  }, "id" | "username">

  export type AdminUserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: AdminUserCountOrderByAggregateInput
    _avg?: AdminUserAvgOrderByAggregateInput
    _max?: AdminUserMaxOrderByAggregateInput
    _min?: AdminUserMinOrderByAggregateInput
    _sum?: AdminUserSumOrderByAggregateInput
  }

  export type AdminUserScalarWhereWithAggregatesInput = {
    AND?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    OR?: AdminUserScalarWhereWithAggregatesInput[]
    NOT?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AdminUser"> | number
    username?: StringWithAggregatesFilter<"AdminUser"> | string
    password?: StringWithAggregatesFilter<"AdminUser"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AdminUser"> | Date | string
  }

  export type ApartmentWhereInput = {
    AND?: ApartmentWhereInput | ApartmentWhereInput[]
    OR?: ApartmentWhereInput[]
    NOT?: ApartmentWhereInput | ApartmentWhereInput[]
    id?: IntFilter<"Apartment"> | number
    name?: StringFilter<"Apartment"> | string
    description?: StringNullableFilter<"Apartment"> | string | null
    bedrooms?: IntFilter<"Apartment"> | number
    bathrooms?: IntFilter<"Apartment"> | number
    maxGuests?: IntFilter<"Apartment"> | number
    pricePerNight?: FloatFilter<"Apartment"> | number
    isActive?: BoolFilter<"Apartment"> | boolean
    images?: ApartmentImageListRelationFilter
    amenities?: ApartmentAmenityListRelationFilter
    bookings?: BookingListRelationFilter
  }

  export type ApartmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    maxGuests?: SortOrder
    pricePerNight?: SortOrder
    isActive?: SortOrder
    images?: ApartmentImageOrderByRelationAggregateInput
    amenities?: ApartmentAmenityOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type ApartmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ApartmentWhereInput | ApartmentWhereInput[]
    OR?: ApartmentWhereInput[]
    NOT?: ApartmentWhereInput | ApartmentWhereInput[]
    name?: StringFilter<"Apartment"> | string
    description?: StringNullableFilter<"Apartment"> | string | null
    bedrooms?: IntFilter<"Apartment"> | number
    bathrooms?: IntFilter<"Apartment"> | number
    maxGuests?: IntFilter<"Apartment"> | number
    pricePerNight?: FloatFilter<"Apartment"> | number
    isActive?: BoolFilter<"Apartment"> | boolean
    images?: ApartmentImageListRelationFilter
    amenities?: ApartmentAmenityListRelationFilter
    bookings?: BookingListRelationFilter
  }, "id">

  export type ApartmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    maxGuests?: SortOrder
    pricePerNight?: SortOrder
    isActive?: SortOrder
    _count?: ApartmentCountOrderByAggregateInput
    _avg?: ApartmentAvgOrderByAggregateInput
    _max?: ApartmentMaxOrderByAggregateInput
    _min?: ApartmentMinOrderByAggregateInput
    _sum?: ApartmentSumOrderByAggregateInput
  }

  export type ApartmentScalarWhereWithAggregatesInput = {
    AND?: ApartmentScalarWhereWithAggregatesInput | ApartmentScalarWhereWithAggregatesInput[]
    OR?: ApartmentScalarWhereWithAggregatesInput[]
    NOT?: ApartmentScalarWhereWithAggregatesInput | ApartmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Apartment"> | number
    name?: StringWithAggregatesFilter<"Apartment"> | string
    description?: StringNullableWithAggregatesFilter<"Apartment"> | string | null
    bedrooms?: IntWithAggregatesFilter<"Apartment"> | number
    bathrooms?: IntWithAggregatesFilter<"Apartment"> | number
    maxGuests?: IntWithAggregatesFilter<"Apartment"> | number
    pricePerNight?: FloatWithAggregatesFilter<"Apartment"> | number
    isActive?: BoolWithAggregatesFilter<"Apartment"> | boolean
  }

  export type ApartmentImageWhereInput = {
    AND?: ApartmentImageWhereInput | ApartmentImageWhereInput[]
    OR?: ApartmentImageWhereInput[]
    NOT?: ApartmentImageWhereInput | ApartmentImageWhereInput[]
    id?: IntFilter<"ApartmentImage"> | number
    apartmentId?: IntFilter<"ApartmentImage"> | number
    imageUrl?: StringFilter<"ApartmentImage"> | string
    altText?: StringNullableFilter<"ApartmentImage"> | string | null
    isMain?: BoolFilter<"ApartmentImage"> | boolean
    sortOrder?: IntFilter<"ApartmentImage"> | number
    apartment?: XOR<ApartmentScalarRelationFilter, ApartmentWhereInput>
  }

  export type ApartmentImageOrderByWithRelationInput = {
    id?: SortOrder
    apartmentId?: SortOrder
    imageUrl?: SortOrder
    altText?: SortOrderInput | SortOrder
    isMain?: SortOrder
    sortOrder?: SortOrder
    apartment?: ApartmentOrderByWithRelationInput
  }

  export type ApartmentImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ApartmentImageWhereInput | ApartmentImageWhereInput[]
    OR?: ApartmentImageWhereInput[]
    NOT?: ApartmentImageWhereInput | ApartmentImageWhereInput[]
    apartmentId?: IntFilter<"ApartmentImage"> | number
    imageUrl?: StringFilter<"ApartmentImage"> | string
    altText?: StringNullableFilter<"ApartmentImage"> | string | null
    isMain?: BoolFilter<"ApartmentImage"> | boolean
    sortOrder?: IntFilter<"ApartmentImage"> | number
    apartment?: XOR<ApartmentScalarRelationFilter, ApartmentWhereInput>
  }, "id">

  export type ApartmentImageOrderByWithAggregationInput = {
    id?: SortOrder
    apartmentId?: SortOrder
    imageUrl?: SortOrder
    altText?: SortOrderInput | SortOrder
    isMain?: SortOrder
    sortOrder?: SortOrder
    _count?: ApartmentImageCountOrderByAggregateInput
    _avg?: ApartmentImageAvgOrderByAggregateInput
    _max?: ApartmentImageMaxOrderByAggregateInput
    _min?: ApartmentImageMinOrderByAggregateInput
    _sum?: ApartmentImageSumOrderByAggregateInput
  }

  export type ApartmentImageScalarWhereWithAggregatesInput = {
    AND?: ApartmentImageScalarWhereWithAggregatesInput | ApartmentImageScalarWhereWithAggregatesInput[]
    OR?: ApartmentImageScalarWhereWithAggregatesInput[]
    NOT?: ApartmentImageScalarWhereWithAggregatesInput | ApartmentImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ApartmentImage"> | number
    apartmentId?: IntWithAggregatesFilter<"ApartmentImage"> | number
    imageUrl?: StringWithAggregatesFilter<"ApartmentImage"> | string
    altText?: StringNullableWithAggregatesFilter<"ApartmentImage"> | string | null
    isMain?: BoolWithAggregatesFilter<"ApartmentImage"> | boolean
    sortOrder?: IntWithAggregatesFilter<"ApartmentImage"> | number
  }

  export type AmenityWhereInput = {
    AND?: AmenityWhereInput | AmenityWhereInput[]
    OR?: AmenityWhereInput[]
    NOT?: AmenityWhereInput | AmenityWhereInput[]
    id?: IntFilter<"Amenity"> | number
    name?: StringFilter<"Amenity"> | string
    apartments?: ApartmentAmenityListRelationFilter
  }

  export type AmenityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    apartments?: ApartmentAmenityOrderByRelationAggregateInput
  }

  export type AmenityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: AmenityWhereInput | AmenityWhereInput[]
    OR?: AmenityWhereInput[]
    NOT?: AmenityWhereInput | AmenityWhereInput[]
    apartments?: ApartmentAmenityListRelationFilter
  }, "id" | "name">

  export type AmenityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: AmenityCountOrderByAggregateInput
    _avg?: AmenityAvgOrderByAggregateInput
    _max?: AmenityMaxOrderByAggregateInput
    _min?: AmenityMinOrderByAggregateInput
    _sum?: AmenitySumOrderByAggregateInput
  }

  export type AmenityScalarWhereWithAggregatesInput = {
    AND?: AmenityScalarWhereWithAggregatesInput | AmenityScalarWhereWithAggregatesInput[]
    OR?: AmenityScalarWhereWithAggregatesInput[]
    NOT?: AmenityScalarWhereWithAggregatesInput | AmenityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Amenity"> | number
    name?: StringWithAggregatesFilter<"Amenity"> | string
  }

  export type ApartmentAmenityWhereInput = {
    AND?: ApartmentAmenityWhereInput | ApartmentAmenityWhereInput[]
    OR?: ApartmentAmenityWhereInput[]
    NOT?: ApartmentAmenityWhereInput | ApartmentAmenityWhereInput[]
    id?: IntFilter<"ApartmentAmenity"> | number
    apartmentId?: IntFilter<"ApartmentAmenity"> | number
    amenityId?: IntFilter<"ApartmentAmenity"> | number
    apartment?: XOR<ApartmentScalarRelationFilter, ApartmentWhereInput>
    amenity?: XOR<AmenityScalarRelationFilter, AmenityWhereInput>
  }

  export type ApartmentAmenityOrderByWithRelationInput = {
    id?: SortOrder
    apartmentId?: SortOrder
    amenityId?: SortOrder
    apartment?: ApartmentOrderByWithRelationInput
    amenity?: AmenityOrderByWithRelationInput
  }

  export type ApartmentAmenityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ApartmentAmenityWhereInput | ApartmentAmenityWhereInput[]
    OR?: ApartmentAmenityWhereInput[]
    NOT?: ApartmentAmenityWhereInput | ApartmentAmenityWhereInput[]
    apartmentId?: IntFilter<"ApartmentAmenity"> | number
    amenityId?: IntFilter<"ApartmentAmenity"> | number
    apartment?: XOR<ApartmentScalarRelationFilter, ApartmentWhereInput>
    amenity?: XOR<AmenityScalarRelationFilter, AmenityWhereInput>
  }, "id">

  export type ApartmentAmenityOrderByWithAggregationInput = {
    id?: SortOrder
    apartmentId?: SortOrder
    amenityId?: SortOrder
    _count?: ApartmentAmenityCountOrderByAggregateInput
    _avg?: ApartmentAmenityAvgOrderByAggregateInput
    _max?: ApartmentAmenityMaxOrderByAggregateInput
    _min?: ApartmentAmenityMinOrderByAggregateInput
    _sum?: ApartmentAmenitySumOrderByAggregateInput
  }

  export type ApartmentAmenityScalarWhereWithAggregatesInput = {
    AND?: ApartmentAmenityScalarWhereWithAggregatesInput | ApartmentAmenityScalarWhereWithAggregatesInput[]
    OR?: ApartmentAmenityScalarWhereWithAggregatesInput[]
    NOT?: ApartmentAmenityScalarWhereWithAggregatesInput | ApartmentAmenityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ApartmentAmenity"> | number
    apartmentId?: IntWithAggregatesFilter<"ApartmentAmenity"> | number
    amenityId?: IntWithAggregatesFilter<"ApartmentAmenity"> | number
  }

  export type GuestWhereInput = {
    AND?: GuestWhereInput | GuestWhereInput[]
    OR?: GuestWhereInput[]
    NOT?: GuestWhereInput | GuestWhereInput[]
    id?: IntFilter<"Guest"> | number
    firstName?: StringFilter<"Guest"> | string
    lastName?: StringFilter<"Guest"> | string
    email?: StringFilter<"Guest"> | string
    phone?: StringNullableFilter<"Guest"> | string | null
    bookings?: BookingListRelationFilter
  }

  export type GuestOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type GuestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: GuestWhereInput | GuestWhereInput[]
    OR?: GuestWhereInput[]
    NOT?: GuestWhereInput | GuestWhereInput[]
    firstName?: StringFilter<"Guest"> | string
    lastName?: StringFilter<"Guest"> | string
    phone?: StringNullableFilter<"Guest"> | string | null
    bookings?: BookingListRelationFilter
  }, "id" | "email">

  export type GuestOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    _count?: GuestCountOrderByAggregateInput
    _avg?: GuestAvgOrderByAggregateInput
    _max?: GuestMaxOrderByAggregateInput
    _min?: GuestMinOrderByAggregateInput
    _sum?: GuestSumOrderByAggregateInput
  }

  export type GuestScalarWhereWithAggregatesInput = {
    AND?: GuestScalarWhereWithAggregatesInput | GuestScalarWhereWithAggregatesInput[]
    OR?: GuestScalarWhereWithAggregatesInput[]
    NOT?: GuestScalarWhereWithAggregatesInput | GuestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Guest"> | number
    firstName?: StringWithAggregatesFilter<"Guest"> | string
    lastName?: StringWithAggregatesFilter<"Guest"> | string
    email?: StringWithAggregatesFilter<"Guest"> | string
    phone?: StringNullableWithAggregatesFilter<"Guest"> | string | null
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: IntFilter<"Booking"> | number
    guestId?: IntFilter<"Booking"> | number
    apartmentId?: IntFilter<"Booking"> | number
    checkIn?: DateTimeFilter<"Booking"> | Date | string
    checkOut?: DateTimeFilter<"Booking"> | Date | string
    guests?: IntFilter<"Booking"> | number
    totalAmount?: FloatFilter<"Booking"> | number
    notes?: StringNullableFilter<"Booking"> | string | null
    status?: StringFilter<"Booking"> | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    guest?: XOR<GuestScalarRelationFilter, GuestWhereInput>
    apartment?: XOR<ApartmentScalarRelationFilter, ApartmentWhereInput>
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    guestId?: SortOrder
    apartmentId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    guests?: SortOrder
    totalAmount?: SortOrder
    notes?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    guest?: GuestOrderByWithRelationInput
    apartment?: ApartmentOrderByWithRelationInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    guestId?: IntFilter<"Booking"> | number
    apartmentId?: IntFilter<"Booking"> | number
    checkIn?: DateTimeFilter<"Booking"> | Date | string
    checkOut?: DateTimeFilter<"Booking"> | Date | string
    guests?: IntFilter<"Booking"> | number
    totalAmount?: FloatFilter<"Booking"> | number
    notes?: StringNullableFilter<"Booking"> | string | null
    status?: StringFilter<"Booking"> | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    guest?: XOR<GuestScalarRelationFilter, GuestWhereInput>
    apartment?: XOR<ApartmentScalarRelationFilter, ApartmentWhereInput>
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    guestId?: SortOrder
    apartmentId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    guests?: SortOrder
    totalAmount?: SortOrder
    notes?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Booking"> | number
    guestId?: IntWithAggregatesFilter<"Booking"> | number
    apartmentId?: IntWithAggregatesFilter<"Booking"> | number
    checkIn?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    checkOut?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    guests?: IntWithAggregatesFilter<"Booking"> | number
    totalAmount?: FloatWithAggregatesFilter<"Booking"> | number
    notes?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    status?: StringWithAggregatesFilter<"Booking"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type AdminUserCreateInput = {
    username: string
    password: string
    createdAt?: Date | string
  }

  export type AdminUserUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    createdAt?: Date | string
  }

  export type AdminUserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserCreateManyInput = {
    id?: number
    username: string
    password: string
    createdAt?: Date | string
  }

  export type AdminUserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApartmentCreateInput = {
    name: string
    description?: string | null
    bedrooms: number
    bathrooms: number
    maxGuests: number
    pricePerNight: number
    isActive?: boolean
    images?: ApartmentImageCreateNestedManyWithoutApartmentInput
    amenities?: ApartmentAmenityCreateNestedManyWithoutApartmentInput
    bookings?: BookingCreateNestedManyWithoutApartmentInput
  }

  export type ApartmentUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    bedrooms: number
    bathrooms: number
    maxGuests: number
    pricePerNight: number
    isActive?: boolean
    images?: ApartmentImageUncheckedCreateNestedManyWithoutApartmentInput
    amenities?: ApartmentAmenityUncheckedCreateNestedManyWithoutApartmentInput
    bookings?: BookingUncheckedCreateNestedManyWithoutApartmentInput
  }

  export type ApartmentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    maxGuests?: IntFieldUpdateOperationsInput | number
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    images?: ApartmentImageUpdateManyWithoutApartmentNestedInput
    amenities?: ApartmentAmenityUpdateManyWithoutApartmentNestedInput
    bookings?: BookingUpdateManyWithoutApartmentNestedInput
  }

  export type ApartmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    maxGuests?: IntFieldUpdateOperationsInput | number
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    images?: ApartmentImageUncheckedUpdateManyWithoutApartmentNestedInput
    amenities?: ApartmentAmenityUncheckedUpdateManyWithoutApartmentNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutApartmentNestedInput
  }

  export type ApartmentCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    bedrooms: number
    bathrooms: number
    maxGuests: number
    pricePerNight: number
    isActive?: boolean
  }

  export type ApartmentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    maxGuests?: IntFieldUpdateOperationsInput | number
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ApartmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    maxGuests?: IntFieldUpdateOperationsInput | number
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ApartmentImageCreateInput = {
    imageUrl: string
    altText?: string | null
    isMain?: boolean
    sortOrder?: number
    apartment: ApartmentCreateNestedOneWithoutImagesInput
  }

  export type ApartmentImageUncheckedCreateInput = {
    id?: number
    apartmentId: number
    imageUrl: string
    altText?: string | null
    isMain?: boolean
    sortOrder?: number
  }

  export type ApartmentImageUpdateInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    isMain?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    apartment?: ApartmentUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ApartmentImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    apartmentId?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    isMain?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ApartmentImageCreateManyInput = {
    id?: number
    apartmentId: number
    imageUrl: string
    altText?: string | null
    isMain?: boolean
    sortOrder?: number
  }

  export type ApartmentImageUpdateManyMutationInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    isMain?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ApartmentImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    apartmentId?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    isMain?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type AmenityCreateInput = {
    name: string
    apartments?: ApartmentAmenityCreateNestedManyWithoutAmenityInput
  }

  export type AmenityUncheckedCreateInput = {
    id?: number
    name: string
    apartments?: ApartmentAmenityUncheckedCreateNestedManyWithoutAmenityInput
  }

  export type AmenityUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    apartments?: ApartmentAmenityUpdateManyWithoutAmenityNestedInput
  }

  export type AmenityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    apartments?: ApartmentAmenityUncheckedUpdateManyWithoutAmenityNestedInput
  }

  export type AmenityCreateManyInput = {
    id?: number
    name: string
  }

  export type AmenityUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AmenityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ApartmentAmenityCreateInput = {
    apartment: ApartmentCreateNestedOneWithoutAmenitiesInput
    amenity: AmenityCreateNestedOneWithoutApartmentsInput
  }

  export type ApartmentAmenityUncheckedCreateInput = {
    id?: number
    apartmentId: number
    amenityId: number
  }

  export type ApartmentAmenityUpdateInput = {
    apartment?: ApartmentUpdateOneRequiredWithoutAmenitiesNestedInput
    amenity?: AmenityUpdateOneRequiredWithoutApartmentsNestedInput
  }

  export type ApartmentAmenityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    apartmentId?: IntFieldUpdateOperationsInput | number
    amenityId?: IntFieldUpdateOperationsInput | number
  }

  export type ApartmentAmenityCreateManyInput = {
    id?: number
    apartmentId: number
    amenityId: number
  }

  export type ApartmentAmenityUpdateManyMutationInput = {

  }

  export type ApartmentAmenityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    apartmentId?: IntFieldUpdateOperationsInput | number
    amenityId?: IntFieldUpdateOperationsInput | number
  }

  export type GuestCreateInput = {
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    bookings?: BookingCreateNestedManyWithoutGuestInput
  }

  export type GuestUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    bookings?: BookingUncheckedCreateNestedManyWithoutGuestInput
  }

  export type GuestUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUpdateManyWithoutGuestNestedInput
  }

  export type GuestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUncheckedUpdateManyWithoutGuestNestedInput
  }

  export type GuestCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    phone?: string | null
  }

  export type GuestUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GuestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookingCreateInput = {
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    totalAmount: number
    notes?: string | null
    status?: string
    createdAt?: Date | string
    guest: GuestCreateNestedOneWithoutBookingsInput
    apartment: ApartmentCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateInput = {
    id?: number
    guestId: number
    apartmentId: number
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    totalAmount: number
    notes?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type BookingUpdateInput = {
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guest?: GuestUpdateOneRequiredWithoutBookingsNestedInput
    apartment?: ApartmentUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    guestId?: IntFieldUpdateOperationsInput | number
    apartmentId?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyInput = {
    id?: number
    guestId: number
    apartmentId: number
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    totalAmount: number
    notes?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    guestId?: IntFieldUpdateOperationsInput | number
    apartmentId?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AdminUserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminUserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminUserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminUserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminUserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ApartmentImageListRelationFilter = {
    every?: ApartmentImageWhereInput
    some?: ApartmentImageWhereInput
    none?: ApartmentImageWhereInput
  }

  export type ApartmentAmenityListRelationFilter = {
    every?: ApartmentAmenityWhereInput
    some?: ApartmentAmenityWhereInput
    none?: ApartmentAmenityWhereInput
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ApartmentImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApartmentAmenityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApartmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    maxGuests?: SortOrder
    pricePerNight?: SortOrder
    isActive?: SortOrder
  }

  export type ApartmentAvgOrderByAggregateInput = {
    id?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    maxGuests?: SortOrder
    pricePerNight?: SortOrder
  }

  export type ApartmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    maxGuests?: SortOrder
    pricePerNight?: SortOrder
    isActive?: SortOrder
  }

  export type ApartmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    maxGuests?: SortOrder
    pricePerNight?: SortOrder
    isActive?: SortOrder
  }

  export type ApartmentSumOrderByAggregateInput = {
    id?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    maxGuests?: SortOrder
    pricePerNight?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ApartmentScalarRelationFilter = {
    is?: ApartmentWhereInput
    isNot?: ApartmentWhereInput
  }

  export type ApartmentImageCountOrderByAggregateInput = {
    id?: SortOrder
    apartmentId?: SortOrder
    imageUrl?: SortOrder
    altText?: SortOrder
    isMain?: SortOrder
    sortOrder?: SortOrder
  }

  export type ApartmentImageAvgOrderByAggregateInput = {
    id?: SortOrder
    apartmentId?: SortOrder
    sortOrder?: SortOrder
  }

  export type ApartmentImageMaxOrderByAggregateInput = {
    id?: SortOrder
    apartmentId?: SortOrder
    imageUrl?: SortOrder
    altText?: SortOrder
    isMain?: SortOrder
    sortOrder?: SortOrder
  }

  export type ApartmentImageMinOrderByAggregateInput = {
    id?: SortOrder
    apartmentId?: SortOrder
    imageUrl?: SortOrder
    altText?: SortOrder
    isMain?: SortOrder
    sortOrder?: SortOrder
  }

  export type ApartmentImageSumOrderByAggregateInput = {
    id?: SortOrder
    apartmentId?: SortOrder
    sortOrder?: SortOrder
  }

  export type AmenityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AmenityAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AmenityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AmenityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AmenitySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AmenityScalarRelationFilter = {
    is?: AmenityWhereInput
    isNot?: AmenityWhereInput
  }

  export type ApartmentAmenityCountOrderByAggregateInput = {
    id?: SortOrder
    apartmentId?: SortOrder
    amenityId?: SortOrder
  }

  export type ApartmentAmenityAvgOrderByAggregateInput = {
    id?: SortOrder
    apartmentId?: SortOrder
    amenityId?: SortOrder
  }

  export type ApartmentAmenityMaxOrderByAggregateInput = {
    id?: SortOrder
    apartmentId?: SortOrder
    amenityId?: SortOrder
  }

  export type ApartmentAmenityMinOrderByAggregateInput = {
    id?: SortOrder
    apartmentId?: SortOrder
    amenityId?: SortOrder
  }

  export type ApartmentAmenitySumOrderByAggregateInput = {
    id?: SortOrder
    apartmentId?: SortOrder
    amenityId?: SortOrder
  }

  export type GuestCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
  }

  export type GuestAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GuestMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
  }

  export type GuestMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
  }

  export type GuestSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GuestScalarRelationFilter = {
    is?: GuestWhereInput
    isNot?: GuestWhereInput
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    guestId?: SortOrder
    apartmentId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    guests?: SortOrder
    totalAmount?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    id?: SortOrder
    guestId?: SortOrder
    apartmentId?: SortOrder
    guests?: SortOrder
    totalAmount?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    guestId?: SortOrder
    apartmentId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    guests?: SortOrder
    totalAmount?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    guestId?: SortOrder
    apartmentId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    guests?: SortOrder
    totalAmount?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    id?: SortOrder
    guestId?: SortOrder
    apartmentId?: SortOrder
    guests?: SortOrder
    totalAmount?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ApartmentImageCreateNestedManyWithoutApartmentInput = {
    create?: XOR<ApartmentImageCreateWithoutApartmentInput, ApartmentImageUncheckedCreateWithoutApartmentInput> | ApartmentImageCreateWithoutApartmentInput[] | ApartmentImageUncheckedCreateWithoutApartmentInput[]
    connectOrCreate?: ApartmentImageCreateOrConnectWithoutApartmentInput | ApartmentImageCreateOrConnectWithoutApartmentInput[]
    createMany?: ApartmentImageCreateManyApartmentInputEnvelope
    connect?: ApartmentImageWhereUniqueInput | ApartmentImageWhereUniqueInput[]
  }

  export type ApartmentAmenityCreateNestedManyWithoutApartmentInput = {
    create?: XOR<ApartmentAmenityCreateWithoutApartmentInput, ApartmentAmenityUncheckedCreateWithoutApartmentInput> | ApartmentAmenityCreateWithoutApartmentInput[] | ApartmentAmenityUncheckedCreateWithoutApartmentInput[]
    connectOrCreate?: ApartmentAmenityCreateOrConnectWithoutApartmentInput | ApartmentAmenityCreateOrConnectWithoutApartmentInput[]
    createMany?: ApartmentAmenityCreateManyApartmentInputEnvelope
    connect?: ApartmentAmenityWhereUniqueInput | ApartmentAmenityWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutApartmentInput = {
    create?: XOR<BookingCreateWithoutApartmentInput, BookingUncheckedCreateWithoutApartmentInput> | BookingCreateWithoutApartmentInput[] | BookingUncheckedCreateWithoutApartmentInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutApartmentInput | BookingCreateOrConnectWithoutApartmentInput[]
    createMany?: BookingCreateManyApartmentInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ApartmentImageUncheckedCreateNestedManyWithoutApartmentInput = {
    create?: XOR<ApartmentImageCreateWithoutApartmentInput, ApartmentImageUncheckedCreateWithoutApartmentInput> | ApartmentImageCreateWithoutApartmentInput[] | ApartmentImageUncheckedCreateWithoutApartmentInput[]
    connectOrCreate?: ApartmentImageCreateOrConnectWithoutApartmentInput | ApartmentImageCreateOrConnectWithoutApartmentInput[]
    createMany?: ApartmentImageCreateManyApartmentInputEnvelope
    connect?: ApartmentImageWhereUniqueInput | ApartmentImageWhereUniqueInput[]
  }

  export type ApartmentAmenityUncheckedCreateNestedManyWithoutApartmentInput = {
    create?: XOR<ApartmentAmenityCreateWithoutApartmentInput, ApartmentAmenityUncheckedCreateWithoutApartmentInput> | ApartmentAmenityCreateWithoutApartmentInput[] | ApartmentAmenityUncheckedCreateWithoutApartmentInput[]
    connectOrCreate?: ApartmentAmenityCreateOrConnectWithoutApartmentInput | ApartmentAmenityCreateOrConnectWithoutApartmentInput[]
    createMany?: ApartmentAmenityCreateManyApartmentInputEnvelope
    connect?: ApartmentAmenityWhereUniqueInput | ApartmentAmenityWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutApartmentInput = {
    create?: XOR<BookingCreateWithoutApartmentInput, BookingUncheckedCreateWithoutApartmentInput> | BookingCreateWithoutApartmentInput[] | BookingUncheckedCreateWithoutApartmentInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutApartmentInput | BookingCreateOrConnectWithoutApartmentInput[]
    createMany?: BookingCreateManyApartmentInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ApartmentImageUpdateManyWithoutApartmentNestedInput = {
    create?: XOR<ApartmentImageCreateWithoutApartmentInput, ApartmentImageUncheckedCreateWithoutApartmentInput> | ApartmentImageCreateWithoutApartmentInput[] | ApartmentImageUncheckedCreateWithoutApartmentInput[]
    connectOrCreate?: ApartmentImageCreateOrConnectWithoutApartmentInput | ApartmentImageCreateOrConnectWithoutApartmentInput[]
    upsert?: ApartmentImageUpsertWithWhereUniqueWithoutApartmentInput | ApartmentImageUpsertWithWhereUniqueWithoutApartmentInput[]
    createMany?: ApartmentImageCreateManyApartmentInputEnvelope
    set?: ApartmentImageWhereUniqueInput | ApartmentImageWhereUniqueInput[]
    disconnect?: ApartmentImageWhereUniqueInput | ApartmentImageWhereUniqueInput[]
    delete?: ApartmentImageWhereUniqueInput | ApartmentImageWhereUniqueInput[]
    connect?: ApartmentImageWhereUniqueInput | ApartmentImageWhereUniqueInput[]
    update?: ApartmentImageUpdateWithWhereUniqueWithoutApartmentInput | ApartmentImageUpdateWithWhereUniqueWithoutApartmentInput[]
    updateMany?: ApartmentImageUpdateManyWithWhereWithoutApartmentInput | ApartmentImageUpdateManyWithWhereWithoutApartmentInput[]
    deleteMany?: ApartmentImageScalarWhereInput | ApartmentImageScalarWhereInput[]
  }

  export type ApartmentAmenityUpdateManyWithoutApartmentNestedInput = {
    create?: XOR<ApartmentAmenityCreateWithoutApartmentInput, ApartmentAmenityUncheckedCreateWithoutApartmentInput> | ApartmentAmenityCreateWithoutApartmentInput[] | ApartmentAmenityUncheckedCreateWithoutApartmentInput[]
    connectOrCreate?: ApartmentAmenityCreateOrConnectWithoutApartmentInput | ApartmentAmenityCreateOrConnectWithoutApartmentInput[]
    upsert?: ApartmentAmenityUpsertWithWhereUniqueWithoutApartmentInput | ApartmentAmenityUpsertWithWhereUniqueWithoutApartmentInput[]
    createMany?: ApartmentAmenityCreateManyApartmentInputEnvelope
    set?: ApartmentAmenityWhereUniqueInput | ApartmentAmenityWhereUniqueInput[]
    disconnect?: ApartmentAmenityWhereUniqueInput | ApartmentAmenityWhereUniqueInput[]
    delete?: ApartmentAmenityWhereUniqueInput | ApartmentAmenityWhereUniqueInput[]
    connect?: ApartmentAmenityWhereUniqueInput | ApartmentAmenityWhereUniqueInput[]
    update?: ApartmentAmenityUpdateWithWhereUniqueWithoutApartmentInput | ApartmentAmenityUpdateWithWhereUniqueWithoutApartmentInput[]
    updateMany?: ApartmentAmenityUpdateManyWithWhereWithoutApartmentInput | ApartmentAmenityUpdateManyWithWhereWithoutApartmentInput[]
    deleteMany?: ApartmentAmenityScalarWhereInput | ApartmentAmenityScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutApartmentNestedInput = {
    create?: XOR<BookingCreateWithoutApartmentInput, BookingUncheckedCreateWithoutApartmentInput> | BookingCreateWithoutApartmentInput[] | BookingUncheckedCreateWithoutApartmentInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutApartmentInput | BookingCreateOrConnectWithoutApartmentInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutApartmentInput | BookingUpsertWithWhereUniqueWithoutApartmentInput[]
    createMany?: BookingCreateManyApartmentInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutApartmentInput | BookingUpdateWithWhereUniqueWithoutApartmentInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutApartmentInput | BookingUpdateManyWithWhereWithoutApartmentInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ApartmentImageUncheckedUpdateManyWithoutApartmentNestedInput = {
    create?: XOR<ApartmentImageCreateWithoutApartmentInput, ApartmentImageUncheckedCreateWithoutApartmentInput> | ApartmentImageCreateWithoutApartmentInput[] | ApartmentImageUncheckedCreateWithoutApartmentInput[]
    connectOrCreate?: ApartmentImageCreateOrConnectWithoutApartmentInput | ApartmentImageCreateOrConnectWithoutApartmentInput[]
    upsert?: ApartmentImageUpsertWithWhereUniqueWithoutApartmentInput | ApartmentImageUpsertWithWhereUniqueWithoutApartmentInput[]
    createMany?: ApartmentImageCreateManyApartmentInputEnvelope
    set?: ApartmentImageWhereUniqueInput | ApartmentImageWhereUniqueInput[]
    disconnect?: ApartmentImageWhereUniqueInput | ApartmentImageWhereUniqueInput[]
    delete?: ApartmentImageWhereUniqueInput | ApartmentImageWhereUniqueInput[]
    connect?: ApartmentImageWhereUniqueInput | ApartmentImageWhereUniqueInput[]
    update?: ApartmentImageUpdateWithWhereUniqueWithoutApartmentInput | ApartmentImageUpdateWithWhereUniqueWithoutApartmentInput[]
    updateMany?: ApartmentImageUpdateManyWithWhereWithoutApartmentInput | ApartmentImageUpdateManyWithWhereWithoutApartmentInput[]
    deleteMany?: ApartmentImageScalarWhereInput | ApartmentImageScalarWhereInput[]
  }

  export type ApartmentAmenityUncheckedUpdateManyWithoutApartmentNestedInput = {
    create?: XOR<ApartmentAmenityCreateWithoutApartmentInput, ApartmentAmenityUncheckedCreateWithoutApartmentInput> | ApartmentAmenityCreateWithoutApartmentInput[] | ApartmentAmenityUncheckedCreateWithoutApartmentInput[]
    connectOrCreate?: ApartmentAmenityCreateOrConnectWithoutApartmentInput | ApartmentAmenityCreateOrConnectWithoutApartmentInput[]
    upsert?: ApartmentAmenityUpsertWithWhereUniqueWithoutApartmentInput | ApartmentAmenityUpsertWithWhereUniqueWithoutApartmentInput[]
    createMany?: ApartmentAmenityCreateManyApartmentInputEnvelope
    set?: ApartmentAmenityWhereUniqueInput | ApartmentAmenityWhereUniqueInput[]
    disconnect?: ApartmentAmenityWhereUniqueInput | ApartmentAmenityWhereUniqueInput[]
    delete?: ApartmentAmenityWhereUniqueInput | ApartmentAmenityWhereUniqueInput[]
    connect?: ApartmentAmenityWhereUniqueInput | ApartmentAmenityWhereUniqueInput[]
    update?: ApartmentAmenityUpdateWithWhereUniqueWithoutApartmentInput | ApartmentAmenityUpdateWithWhereUniqueWithoutApartmentInput[]
    updateMany?: ApartmentAmenityUpdateManyWithWhereWithoutApartmentInput | ApartmentAmenityUpdateManyWithWhereWithoutApartmentInput[]
    deleteMany?: ApartmentAmenityScalarWhereInput | ApartmentAmenityScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutApartmentNestedInput = {
    create?: XOR<BookingCreateWithoutApartmentInput, BookingUncheckedCreateWithoutApartmentInput> | BookingCreateWithoutApartmentInput[] | BookingUncheckedCreateWithoutApartmentInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutApartmentInput | BookingCreateOrConnectWithoutApartmentInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutApartmentInput | BookingUpsertWithWhereUniqueWithoutApartmentInput[]
    createMany?: BookingCreateManyApartmentInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutApartmentInput | BookingUpdateWithWhereUniqueWithoutApartmentInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutApartmentInput | BookingUpdateManyWithWhereWithoutApartmentInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ApartmentCreateNestedOneWithoutImagesInput = {
    create?: XOR<ApartmentCreateWithoutImagesInput, ApartmentUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ApartmentCreateOrConnectWithoutImagesInput
    connect?: ApartmentWhereUniqueInput
  }

  export type ApartmentUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<ApartmentCreateWithoutImagesInput, ApartmentUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ApartmentCreateOrConnectWithoutImagesInput
    upsert?: ApartmentUpsertWithoutImagesInput
    connect?: ApartmentWhereUniqueInput
    update?: XOR<XOR<ApartmentUpdateToOneWithWhereWithoutImagesInput, ApartmentUpdateWithoutImagesInput>, ApartmentUncheckedUpdateWithoutImagesInput>
  }

  export type ApartmentAmenityCreateNestedManyWithoutAmenityInput = {
    create?: XOR<ApartmentAmenityCreateWithoutAmenityInput, ApartmentAmenityUncheckedCreateWithoutAmenityInput> | ApartmentAmenityCreateWithoutAmenityInput[] | ApartmentAmenityUncheckedCreateWithoutAmenityInput[]
    connectOrCreate?: ApartmentAmenityCreateOrConnectWithoutAmenityInput | ApartmentAmenityCreateOrConnectWithoutAmenityInput[]
    createMany?: ApartmentAmenityCreateManyAmenityInputEnvelope
    connect?: ApartmentAmenityWhereUniqueInput | ApartmentAmenityWhereUniqueInput[]
  }

  export type ApartmentAmenityUncheckedCreateNestedManyWithoutAmenityInput = {
    create?: XOR<ApartmentAmenityCreateWithoutAmenityInput, ApartmentAmenityUncheckedCreateWithoutAmenityInput> | ApartmentAmenityCreateWithoutAmenityInput[] | ApartmentAmenityUncheckedCreateWithoutAmenityInput[]
    connectOrCreate?: ApartmentAmenityCreateOrConnectWithoutAmenityInput | ApartmentAmenityCreateOrConnectWithoutAmenityInput[]
    createMany?: ApartmentAmenityCreateManyAmenityInputEnvelope
    connect?: ApartmentAmenityWhereUniqueInput | ApartmentAmenityWhereUniqueInput[]
  }

  export type ApartmentAmenityUpdateManyWithoutAmenityNestedInput = {
    create?: XOR<ApartmentAmenityCreateWithoutAmenityInput, ApartmentAmenityUncheckedCreateWithoutAmenityInput> | ApartmentAmenityCreateWithoutAmenityInput[] | ApartmentAmenityUncheckedCreateWithoutAmenityInput[]
    connectOrCreate?: ApartmentAmenityCreateOrConnectWithoutAmenityInput | ApartmentAmenityCreateOrConnectWithoutAmenityInput[]
    upsert?: ApartmentAmenityUpsertWithWhereUniqueWithoutAmenityInput | ApartmentAmenityUpsertWithWhereUniqueWithoutAmenityInput[]
    createMany?: ApartmentAmenityCreateManyAmenityInputEnvelope
    set?: ApartmentAmenityWhereUniqueInput | ApartmentAmenityWhereUniqueInput[]
    disconnect?: ApartmentAmenityWhereUniqueInput | ApartmentAmenityWhereUniqueInput[]
    delete?: ApartmentAmenityWhereUniqueInput | ApartmentAmenityWhereUniqueInput[]
    connect?: ApartmentAmenityWhereUniqueInput | ApartmentAmenityWhereUniqueInput[]
    update?: ApartmentAmenityUpdateWithWhereUniqueWithoutAmenityInput | ApartmentAmenityUpdateWithWhereUniqueWithoutAmenityInput[]
    updateMany?: ApartmentAmenityUpdateManyWithWhereWithoutAmenityInput | ApartmentAmenityUpdateManyWithWhereWithoutAmenityInput[]
    deleteMany?: ApartmentAmenityScalarWhereInput | ApartmentAmenityScalarWhereInput[]
  }

  export type ApartmentAmenityUncheckedUpdateManyWithoutAmenityNestedInput = {
    create?: XOR<ApartmentAmenityCreateWithoutAmenityInput, ApartmentAmenityUncheckedCreateWithoutAmenityInput> | ApartmentAmenityCreateWithoutAmenityInput[] | ApartmentAmenityUncheckedCreateWithoutAmenityInput[]
    connectOrCreate?: ApartmentAmenityCreateOrConnectWithoutAmenityInput | ApartmentAmenityCreateOrConnectWithoutAmenityInput[]
    upsert?: ApartmentAmenityUpsertWithWhereUniqueWithoutAmenityInput | ApartmentAmenityUpsertWithWhereUniqueWithoutAmenityInput[]
    createMany?: ApartmentAmenityCreateManyAmenityInputEnvelope
    set?: ApartmentAmenityWhereUniqueInput | ApartmentAmenityWhereUniqueInput[]
    disconnect?: ApartmentAmenityWhereUniqueInput | ApartmentAmenityWhereUniqueInput[]
    delete?: ApartmentAmenityWhereUniqueInput | ApartmentAmenityWhereUniqueInput[]
    connect?: ApartmentAmenityWhereUniqueInput | ApartmentAmenityWhereUniqueInput[]
    update?: ApartmentAmenityUpdateWithWhereUniqueWithoutAmenityInput | ApartmentAmenityUpdateWithWhereUniqueWithoutAmenityInput[]
    updateMany?: ApartmentAmenityUpdateManyWithWhereWithoutAmenityInput | ApartmentAmenityUpdateManyWithWhereWithoutAmenityInput[]
    deleteMany?: ApartmentAmenityScalarWhereInput | ApartmentAmenityScalarWhereInput[]
  }

  export type ApartmentCreateNestedOneWithoutAmenitiesInput = {
    create?: XOR<ApartmentCreateWithoutAmenitiesInput, ApartmentUncheckedCreateWithoutAmenitiesInput>
    connectOrCreate?: ApartmentCreateOrConnectWithoutAmenitiesInput
    connect?: ApartmentWhereUniqueInput
  }

  export type AmenityCreateNestedOneWithoutApartmentsInput = {
    create?: XOR<AmenityCreateWithoutApartmentsInput, AmenityUncheckedCreateWithoutApartmentsInput>
    connectOrCreate?: AmenityCreateOrConnectWithoutApartmentsInput
    connect?: AmenityWhereUniqueInput
  }

  export type ApartmentUpdateOneRequiredWithoutAmenitiesNestedInput = {
    create?: XOR<ApartmentCreateWithoutAmenitiesInput, ApartmentUncheckedCreateWithoutAmenitiesInput>
    connectOrCreate?: ApartmentCreateOrConnectWithoutAmenitiesInput
    upsert?: ApartmentUpsertWithoutAmenitiesInput
    connect?: ApartmentWhereUniqueInput
    update?: XOR<XOR<ApartmentUpdateToOneWithWhereWithoutAmenitiesInput, ApartmentUpdateWithoutAmenitiesInput>, ApartmentUncheckedUpdateWithoutAmenitiesInput>
  }

  export type AmenityUpdateOneRequiredWithoutApartmentsNestedInput = {
    create?: XOR<AmenityCreateWithoutApartmentsInput, AmenityUncheckedCreateWithoutApartmentsInput>
    connectOrCreate?: AmenityCreateOrConnectWithoutApartmentsInput
    upsert?: AmenityUpsertWithoutApartmentsInput
    connect?: AmenityWhereUniqueInput
    update?: XOR<XOR<AmenityUpdateToOneWithWhereWithoutApartmentsInput, AmenityUpdateWithoutApartmentsInput>, AmenityUncheckedUpdateWithoutApartmentsInput>
  }

  export type BookingCreateNestedManyWithoutGuestInput = {
    create?: XOR<BookingCreateWithoutGuestInput, BookingUncheckedCreateWithoutGuestInput> | BookingCreateWithoutGuestInput[] | BookingUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutGuestInput | BookingCreateOrConnectWithoutGuestInput[]
    createMany?: BookingCreateManyGuestInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutGuestInput = {
    create?: XOR<BookingCreateWithoutGuestInput, BookingUncheckedCreateWithoutGuestInput> | BookingCreateWithoutGuestInput[] | BookingUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutGuestInput | BookingCreateOrConnectWithoutGuestInput[]
    createMany?: BookingCreateManyGuestInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingUpdateManyWithoutGuestNestedInput = {
    create?: XOR<BookingCreateWithoutGuestInput, BookingUncheckedCreateWithoutGuestInput> | BookingCreateWithoutGuestInput[] | BookingUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutGuestInput | BookingCreateOrConnectWithoutGuestInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutGuestInput | BookingUpsertWithWhereUniqueWithoutGuestInput[]
    createMany?: BookingCreateManyGuestInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutGuestInput | BookingUpdateWithWhereUniqueWithoutGuestInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutGuestInput | BookingUpdateManyWithWhereWithoutGuestInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutGuestNestedInput = {
    create?: XOR<BookingCreateWithoutGuestInput, BookingUncheckedCreateWithoutGuestInput> | BookingCreateWithoutGuestInput[] | BookingUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutGuestInput | BookingCreateOrConnectWithoutGuestInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutGuestInput | BookingUpsertWithWhereUniqueWithoutGuestInput[]
    createMany?: BookingCreateManyGuestInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutGuestInput | BookingUpdateWithWhereUniqueWithoutGuestInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutGuestInput | BookingUpdateManyWithWhereWithoutGuestInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type GuestCreateNestedOneWithoutBookingsInput = {
    create?: XOR<GuestCreateWithoutBookingsInput, GuestUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: GuestCreateOrConnectWithoutBookingsInput
    connect?: GuestWhereUniqueInput
  }

  export type ApartmentCreateNestedOneWithoutBookingsInput = {
    create?: XOR<ApartmentCreateWithoutBookingsInput, ApartmentUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ApartmentCreateOrConnectWithoutBookingsInput
    connect?: ApartmentWhereUniqueInput
  }

  export type GuestUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<GuestCreateWithoutBookingsInput, GuestUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: GuestCreateOrConnectWithoutBookingsInput
    upsert?: GuestUpsertWithoutBookingsInput
    connect?: GuestWhereUniqueInput
    update?: XOR<XOR<GuestUpdateToOneWithWhereWithoutBookingsInput, GuestUpdateWithoutBookingsInput>, GuestUncheckedUpdateWithoutBookingsInput>
  }

  export type ApartmentUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<ApartmentCreateWithoutBookingsInput, ApartmentUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ApartmentCreateOrConnectWithoutBookingsInput
    upsert?: ApartmentUpsertWithoutBookingsInput
    connect?: ApartmentWhereUniqueInput
    update?: XOR<XOR<ApartmentUpdateToOneWithWhereWithoutBookingsInput, ApartmentUpdateWithoutBookingsInput>, ApartmentUncheckedUpdateWithoutBookingsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ApartmentImageCreateWithoutApartmentInput = {
    imageUrl: string
    altText?: string | null
    isMain?: boolean
    sortOrder?: number
  }

  export type ApartmentImageUncheckedCreateWithoutApartmentInput = {
    id?: number
    imageUrl: string
    altText?: string | null
    isMain?: boolean
    sortOrder?: number
  }

  export type ApartmentImageCreateOrConnectWithoutApartmentInput = {
    where: ApartmentImageWhereUniqueInput
    create: XOR<ApartmentImageCreateWithoutApartmentInput, ApartmentImageUncheckedCreateWithoutApartmentInput>
  }

  export type ApartmentImageCreateManyApartmentInputEnvelope = {
    data: ApartmentImageCreateManyApartmentInput | ApartmentImageCreateManyApartmentInput[]
    skipDuplicates?: boolean
  }

  export type ApartmentAmenityCreateWithoutApartmentInput = {
    amenity: AmenityCreateNestedOneWithoutApartmentsInput
  }

  export type ApartmentAmenityUncheckedCreateWithoutApartmentInput = {
    id?: number
    amenityId: number
  }

  export type ApartmentAmenityCreateOrConnectWithoutApartmentInput = {
    where: ApartmentAmenityWhereUniqueInput
    create: XOR<ApartmentAmenityCreateWithoutApartmentInput, ApartmentAmenityUncheckedCreateWithoutApartmentInput>
  }

  export type ApartmentAmenityCreateManyApartmentInputEnvelope = {
    data: ApartmentAmenityCreateManyApartmentInput | ApartmentAmenityCreateManyApartmentInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutApartmentInput = {
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    totalAmount: number
    notes?: string | null
    status?: string
    createdAt?: Date | string
    guest: GuestCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutApartmentInput = {
    id?: number
    guestId: number
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    totalAmount: number
    notes?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutApartmentInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutApartmentInput, BookingUncheckedCreateWithoutApartmentInput>
  }

  export type BookingCreateManyApartmentInputEnvelope = {
    data: BookingCreateManyApartmentInput | BookingCreateManyApartmentInput[]
    skipDuplicates?: boolean
  }

  export type ApartmentImageUpsertWithWhereUniqueWithoutApartmentInput = {
    where: ApartmentImageWhereUniqueInput
    update: XOR<ApartmentImageUpdateWithoutApartmentInput, ApartmentImageUncheckedUpdateWithoutApartmentInput>
    create: XOR<ApartmentImageCreateWithoutApartmentInput, ApartmentImageUncheckedCreateWithoutApartmentInput>
  }

  export type ApartmentImageUpdateWithWhereUniqueWithoutApartmentInput = {
    where: ApartmentImageWhereUniqueInput
    data: XOR<ApartmentImageUpdateWithoutApartmentInput, ApartmentImageUncheckedUpdateWithoutApartmentInput>
  }

  export type ApartmentImageUpdateManyWithWhereWithoutApartmentInput = {
    where: ApartmentImageScalarWhereInput
    data: XOR<ApartmentImageUpdateManyMutationInput, ApartmentImageUncheckedUpdateManyWithoutApartmentInput>
  }

  export type ApartmentImageScalarWhereInput = {
    AND?: ApartmentImageScalarWhereInput | ApartmentImageScalarWhereInput[]
    OR?: ApartmentImageScalarWhereInput[]
    NOT?: ApartmentImageScalarWhereInput | ApartmentImageScalarWhereInput[]
    id?: IntFilter<"ApartmentImage"> | number
    apartmentId?: IntFilter<"ApartmentImage"> | number
    imageUrl?: StringFilter<"ApartmentImage"> | string
    altText?: StringNullableFilter<"ApartmentImage"> | string | null
    isMain?: BoolFilter<"ApartmentImage"> | boolean
    sortOrder?: IntFilter<"ApartmentImage"> | number
  }

  export type ApartmentAmenityUpsertWithWhereUniqueWithoutApartmentInput = {
    where: ApartmentAmenityWhereUniqueInput
    update: XOR<ApartmentAmenityUpdateWithoutApartmentInput, ApartmentAmenityUncheckedUpdateWithoutApartmentInput>
    create: XOR<ApartmentAmenityCreateWithoutApartmentInput, ApartmentAmenityUncheckedCreateWithoutApartmentInput>
  }

  export type ApartmentAmenityUpdateWithWhereUniqueWithoutApartmentInput = {
    where: ApartmentAmenityWhereUniqueInput
    data: XOR<ApartmentAmenityUpdateWithoutApartmentInput, ApartmentAmenityUncheckedUpdateWithoutApartmentInput>
  }

  export type ApartmentAmenityUpdateManyWithWhereWithoutApartmentInput = {
    where: ApartmentAmenityScalarWhereInput
    data: XOR<ApartmentAmenityUpdateManyMutationInput, ApartmentAmenityUncheckedUpdateManyWithoutApartmentInput>
  }

  export type ApartmentAmenityScalarWhereInput = {
    AND?: ApartmentAmenityScalarWhereInput | ApartmentAmenityScalarWhereInput[]
    OR?: ApartmentAmenityScalarWhereInput[]
    NOT?: ApartmentAmenityScalarWhereInput | ApartmentAmenityScalarWhereInput[]
    id?: IntFilter<"ApartmentAmenity"> | number
    apartmentId?: IntFilter<"ApartmentAmenity"> | number
    amenityId?: IntFilter<"ApartmentAmenity"> | number
  }

  export type BookingUpsertWithWhereUniqueWithoutApartmentInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutApartmentInput, BookingUncheckedUpdateWithoutApartmentInput>
    create: XOR<BookingCreateWithoutApartmentInput, BookingUncheckedCreateWithoutApartmentInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutApartmentInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutApartmentInput, BookingUncheckedUpdateWithoutApartmentInput>
  }

  export type BookingUpdateManyWithWhereWithoutApartmentInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutApartmentInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: IntFilter<"Booking"> | number
    guestId?: IntFilter<"Booking"> | number
    apartmentId?: IntFilter<"Booking"> | number
    checkIn?: DateTimeFilter<"Booking"> | Date | string
    checkOut?: DateTimeFilter<"Booking"> | Date | string
    guests?: IntFilter<"Booking"> | number
    totalAmount?: FloatFilter<"Booking"> | number
    notes?: StringNullableFilter<"Booking"> | string | null
    status?: StringFilter<"Booking"> | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
  }

  export type ApartmentCreateWithoutImagesInput = {
    name: string
    description?: string | null
    bedrooms: number
    bathrooms: number
    maxGuests: number
    pricePerNight: number
    isActive?: boolean
    amenities?: ApartmentAmenityCreateNestedManyWithoutApartmentInput
    bookings?: BookingCreateNestedManyWithoutApartmentInput
  }

  export type ApartmentUncheckedCreateWithoutImagesInput = {
    id?: number
    name: string
    description?: string | null
    bedrooms: number
    bathrooms: number
    maxGuests: number
    pricePerNight: number
    isActive?: boolean
    amenities?: ApartmentAmenityUncheckedCreateNestedManyWithoutApartmentInput
    bookings?: BookingUncheckedCreateNestedManyWithoutApartmentInput
  }

  export type ApartmentCreateOrConnectWithoutImagesInput = {
    where: ApartmentWhereUniqueInput
    create: XOR<ApartmentCreateWithoutImagesInput, ApartmentUncheckedCreateWithoutImagesInput>
  }

  export type ApartmentUpsertWithoutImagesInput = {
    update: XOR<ApartmentUpdateWithoutImagesInput, ApartmentUncheckedUpdateWithoutImagesInput>
    create: XOR<ApartmentCreateWithoutImagesInput, ApartmentUncheckedCreateWithoutImagesInput>
    where?: ApartmentWhereInput
  }

  export type ApartmentUpdateToOneWithWhereWithoutImagesInput = {
    where?: ApartmentWhereInput
    data: XOR<ApartmentUpdateWithoutImagesInput, ApartmentUncheckedUpdateWithoutImagesInput>
  }

  export type ApartmentUpdateWithoutImagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    maxGuests?: IntFieldUpdateOperationsInput | number
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    amenities?: ApartmentAmenityUpdateManyWithoutApartmentNestedInput
    bookings?: BookingUpdateManyWithoutApartmentNestedInput
  }

  export type ApartmentUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    maxGuests?: IntFieldUpdateOperationsInput | number
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    amenities?: ApartmentAmenityUncheckedUpdateManyWithoutApartmentNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutApartmentNestedInput
  }

  export type ApartmentAmenityCreateWithoutAmenityInput = {
    apartment: ApartmentCreateNestedOneWithoutAmenitiesInput
  }

  export type ApartmentAmenityUncheckedCreateWithoutAmenityInput = {
    id?: number
    apartmentId: number
  }

  export type ApartmentAmenityCreateOrConnectWithoutAmenityInput = {
    where: ApartmentAmenityWhereUniqueInput
    create: XOR<ApartmentAmenityCreateWithoutAmenityInput, ApartmentAmenityUncheckedCreateWithoutAmenityInput>
  }

  export type ApartmentAmenityCreateManyAmenityInputEnvelope = {
    data: ApartmentAmenityCreateManyAmenityInput | ApartmentAmenityCreateManyAmenityInput[]
    skipDuplicates?: boolean
  }

  export type ApartmentAmenityUpsertWithWhereUniqueWithoutAmenityInput = {
    where: ApartmentAmenityWhereUniqueInput
    update: XOR<ApartmentAmenityUpdateWithoutAmenityInput, ApartmentAmenityUncheckedUpdateWithoutAmenityInput>
    create: XOR<ApartmentAmenityCreateWithoutAmenityInput, ApartmentAmenityUncheckedCreateWithoutAmenityInput>
  }

  export type ApartmentAmenityUpdateWithWhereUniqueWithoutAmenityInput = {
    where: ApartmentAmenityWhereUniqueInput
    data: XOR<ApartmentAmenityUpdateWithoutAmenityInput, ApartmentAmenityUncheckedUpdateWithoutAmenityInput>
  }

  export type ApartmentAmenityUpdateManyWithWhereWithoutAmenityInput = {
    where: ApartmentAmenityScalarWhereInput
    data: XOR<ApartmentAmenityUpdateManyMutationInput, ApartmentAmenityUncheckedUpdateManyWithoutAmenityInput>
  }

  export type ApartmentCreateWithoutAmenitiesInput = {
    name: string
    description?: string | null
    bedrooms: number
    bathrooms: number
    maxGuests: number
    pricePerNight: number
    isActive?: boolean
    images?: ApartmentImageCreateNestedManyWithoutApartmentInput
    bookings?: BookingCreateNestedManyWithoutApartmentInput
  }

  export type ApartmentUncheckedCreateWithoutAmenitiesInput = {
    id?: number
    name: string
    description?: string | null
    bedrooms: number
    bathrooms: number
    maxGuests: number
    pricePerNight: number
    isActive?: boolean
    images?: ApartmentImageUncheckedCreateNestedManyWithoutApartmentInput
    bookings?: BookingUncheckedCreateNestedManyWithoutApartmentInput
  }

  export type ApartmentCreateOrConnectWithoutAmenitiesInput = {
    where: ApartmentWhereUniqueInput
    create: XOR<ApartmentCreateWithoutAmenitiesInput, ApartmentUncheckedCreateWithoutAmenitiesInput>
  }

  export type AmenityCreateWithoutApartmentsInput = {
    name: string
  }

  export type AmenityUncheckedCreateWithoutApartmentsInput = {
    id?: number
    name: string
  }

  export type AmenityCreateOrConnectWithoutApartmentsInput = {
    where: AmenityWhereUniqueInput
    create: XOR<AmenityCreateWithoutApartmentsInput, AmenityUncheckedCreateWithoutApartmentsInput>
  }

  export type ApartmentUpsertWithoutAmenitiesInput = {
    update: XOR<ApartmentUpdateWithoutAmenitiesInput, ApartmentUncheckedUpdateWithoutAmenitiesInput>
    create: XOR<ApartmentCreateWithoutAmenitiesInput, ApartmentUncheckedCreateWithoutAmenitiesInput>
    where?: ApartmentWhereInput
  }

  export type ApartmentUpdateToOneWithWhereWithoutAmenitiesInput = {
    where?: ApartmentWhereInput
    data: XOR<ApartmentUpdateWithoutAmenitiesInput, ApartmentUncheckedUpdateWithoutAmenitiesInput>
  }

  export type ApartmentUpdateWithoutAmenitiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    maxGuests?: IntFieldUpdateOperationsInput | number
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    images?: ApartmentImageUpdateManyWithoutApartmentNestedInput
    bookings?: BookingUpdateManyWithoutApartmentNestedInput
  }

  export type ApartmentUncheckedUpdateWithoutAmenitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    maxGuests?: IntFieldUpdateOperationsInput | number
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    images?: ApartmentImageUncheckedUpdateManyWithoutApartmentNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutApartmentNestedInput
  }

  export type AmenityUpsertWithoutApartmentsInput = {
    update: XOR<AmenityUpdateWithoutApartmentsInput, AmenityUncheckedUpdateWithoutApartmentsInput>
    create: XOR<AmenityCreateWithoutApartmentsInput, AmenityUncheckedCreateWithoutApartmentsInput>
    where?: AmenityWhereInput
  }

  export type AmenityUpdateToOneWithWhereWithoutApartmentsInput = {
    where?: AmenityWhereInput
    data: XOR<AmenityUpdateWithoutApartmentsInput, AmenityUncheckedUpdateWithoutApartmentsInput>
  }

  export type AmenityUpdateWithoutApartmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AmenityUncheckedUpdateWithoutApartmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BookingCreateWithoutGuestInput = {
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    totalAmount: number
    notes?: string | null
    status?: string
    createdAt?: Date | string
    apartment: ApartmentCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutGuestInput = {
    id?: number
    apartmentId: number
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    totalAmount: number
    notes?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutGuestInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutGuestInput, BookingUncheckedCreateWithoutGuestInput>
  }

  export type BookingCreateManyGuestInputEnvelope = {
    data: BookingCreateManyGuestInput | BookingCreateManyGuestInput[]
    skipDuplicates?: boolean
  }

  export type BookingUpsertWithWhereUniqueWithoutGuestInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutGuestInput, BookingUncheckedUpdateWithoutGuestInput>
    create: XOR<BookingCreateWithoutGuestInput, BookingUncheckedCreateWithoutGuestInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutGuestInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutGuestInput, BookingUncheckedUpdateWithoutGuestInput>
  }

  export type BookingUpdateManyWithWhereWithoutGuestInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutGuestInput>
  }

  export type GuestCreateWithoutBookingsInput = {
    firstName: string
    lastName: string
    email: string
    phone?: string | null
  }

  export type GuestUncheckedCreateWithoutBookingsInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    phone?: string | null
  }

  export type GuestCreateOrConnectWithoutBookingsInput = {
    where: GuestWhereUniqueInput
    create: XOR<GuestCreateWithoutBookingsInput, GuestUncheckedCreateWithoutBookingsInput>
  }

  export type ApartmentCreateWithoutBookingsInput = {
    name: string
    description?: string | null
    bedrooms: number
    bathrooms: number
    maxGuests: number
    pricePerNight: number
    isActive?: boolean
    images?: ApartmentImageCreateNestedManyWithoutApartmentInput
    amenities?: ApartmentAmenityCreateNestedManyWithoutApartmentInput
  }

  export type ApartmentUncheckedCreateWithoutBookingsInput = {
    id?: number
    name: string
    description?: string | null
    bedrooms: number
    bathrooms: number
    maxGuests: number
    pricePerNight: number
    isActive?: boolean
    images?: ApartmentImageUncheckedCreateNestedManyWithoutApartmentInput
    amenities?: ApartmentAmenityUncheckedCreateNestedManyWithoutApartmentInput
  }

  export type ApartmentCreateOrConnectWithoutBookingsInput = {
    where: ApartmentWhereUniqueInput
    create: XOR<ApartmentCreateWithoutBookingsInput, ApartmentUncheckedCreateWithoutBookingsInput>
  }

  export type GuestUpsertWithoutBookingsInput = {
    update: XOR<GuestUpdateWithoutBookingsInput, GuestUncheckedUpdateWithoutBookingsInput>
    create: XOR<GuestCreateWithoutBookingsInput, GuestUncheckedCreateWithoutBookingsInput>
    where?: GuestWhereInput
  }

  export type GuestUpdateToOneWithWhereWithoutBookingsInput = {
    where?: GuestWhereInput
    data: XOR<GuestUpdateWithoutBookingsInput, GuestUncheckedUpdateWithoutBookingsInput>
  }

  export type GuestUpdateWithoutBookingsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GuestUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApartmentUpsertWithoutBookingsInput = {
    update: XOR<ApartmentUpdateWithoutBookingsInput, ApartmentUncheckedUpdateWithoutBookingsInput>
    create: XOR<ApartmentCreateWithoutBookingsInput, ApartmentUncheckedCreateWithoutBookingsInput>
    where?: ApartmentWhereInput
  }

  export type ApartmentUpdateToOneWithWhereWithoutBookingsInput = {
    where?: ApartmentWhereInput
    data: XOR<ApartmentUpdateWithoutBookingsInput, ApartmentUncheckedUpdateWithoutBookingsInput>
  }

  export type ApartmentUpdateWithoutBookingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    maxGuests?: IntFieldUpdateOperationsInput | number
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    images?: ApartmentImageUpdateManyWithoutApartmentNestedInput
    amenities?: ApartmentAmenityUpdateManyWithoutApartmentNestedInput
  }

  export type ApartmentUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    maxGuests?: IntFieldUpdateOperationsInput | number
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    images?: ApartmentImageUncheckedUpdateManyWithoutApartmentNestedInput
    amenities?: ApartmentAmenityUncheckedUpdateManyWithoutApartmentNestedInput
  }

  export type ApartmentImageCreateManyApartmentInput = {
    id?: number
    imageUrl: string
    altText?: string | null
    isMain?: boolean
    sortOrder?: number
  }

  export type ApartmentAmenityCreateManyApartmentInput = {
    id?: number
    amenityId: number
  }

  export type BookingCreateManyApartmentInput = {
    id?: number
    guestId: number
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    totalAmount: number
    notes?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type ApartmentImageUpdateWithoutApartmentInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    isMain?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ApartmentImageUncheckedUpdateWithoutApartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    isMain?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ApartmentImageUncheckedUpdateManyWithoutApartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    isMain?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ApartmentAmenityUpdateWithoutApartmentInput = {
    amenity?: AmenityUpdateOneRequiredWithoutApartmentsNestedInput
  }

  export type ApartmentAmenityUncheckedUpdateWithoutApartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    amenityId?: IntFieldUpdateOperationsInput | number
  }

  export type ApartmentAmenityUncheckedUpdateManyWithoutApartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    amenityId?: IntFieldUpdateOperationsInput | number
  }

  export type BookingUpdateWithoutApartmentInput = {
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guest?: GuestUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutApartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    guestId?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutApartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    guestId?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApartmentAmenityCreateManyAmenityInput = {
    id?: number
    apartmentId: number
  }

  export type ApartmentAmenityUpdateWithoutAmenityInput = {
    apartment?: ApartmentUpdateOneRequiredWithoutAmenitiesNestedInput
  }

  export type ApartmentAmenityUncheckedUpdateWithoutAmenityInput = {
    id?: IntFieldUpdateOperationsInput | number
    apartmentId?: IntFieldUpdateOperationsInput | number
  }

  export type ApartmentAmenityUncheckedUpdateManyWithoutAmenityInput = {
    id?: IntFieldUpdateOperationsInput | number
    apartmentId?: IntFieldUpdateOperationsInput | number
  }

  export type BookingCreateManyGuestInput = {
    id?: number
    apartmentId: number
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    totalAmount: number
    notes?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type BookingUpdateWithoutGuestInput = {
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apartment?: ApartmentUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutGuestInput = {
    id?: IntFieldUpdateOperationsInput | number
    apartmentId?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutGuestInput = {
    id?: IntFieldUpdateOperationsInput | number
    apartmentId?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}