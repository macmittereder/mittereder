export function getStatus(now = new Date()) {
  return {
    status: "ok",
    message: "Mittereder website is running",
    timestamp: now.toISOString(),
  };
}
