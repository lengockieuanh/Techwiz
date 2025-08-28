<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\UserProfile;
use Illuminate\Http\Request;

class UserProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return UserProfile::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return UserProfile::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return UserProfile::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $userProfile=UserProfile::findOrFail($id);
        $userProfile->update($request->all());
        return $userProfile;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        UserProfile::destroy($id);
        return response()->json(['message'=>'Deleted']);
    }
}
