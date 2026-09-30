import { getStatus } from './status.ts';

export function GET() {
  return Response.json(getStatus());
}
