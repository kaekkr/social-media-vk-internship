public function handle($request, Closure $next)
{
return $next($request)
->header('Access-Control-Allow-Origin', env('APP_URL'))
->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
->header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}
