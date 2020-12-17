export class ErrorsGroup {
  name: string;
  errors: number[];

  static get4xxGroup(): ErrorsGroup {
    const eg = new ErrorsGroup();
    eg.name = '4xx';
    eg.errors = [
      400,
      401,
      402,
      403,
      404,
      405,
      406,
      407,
      408,
      409,
      410,
      411,
      412,
      413,
      414,
      415,
    ];

    return eg;
  }

  static get5xxGroup(): ErrorsGroup {
    const eg = new ErrorsGroup();
    eg.name = '5xx';
    eg.errors = [500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511];

    return eg;
  }
}
