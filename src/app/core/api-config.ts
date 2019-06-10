import {environment} from '../../environments/environment';


export class ApiConfig {
  private static readonly base = environment.baseURL;

  public static readonly books = `${ApiConfig.base}/assets/mock-data/books.json`;
}
