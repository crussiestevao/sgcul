<?php

namespace App\Providers;

use App\Models\User;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        Gate::define("superadmin", function (User $user) {
            return $user->hasRole("super_admin");
        });

        Gate::define("local_admin", function (User $user) {

          if($user->can('superadmin')){
            return true;
          }else{
            return $user->hasRole("local_admin");
          }

        });

        Gate::define("supervisor", function (User $user) {
            
            if($user->can('superadmin')){
                    return true;
            }else{
                return $user->hasRole("supervisor");  
            }
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Schema::defaultStringLength(191);
    }
}
