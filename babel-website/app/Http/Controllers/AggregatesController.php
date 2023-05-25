<?php

namespace App\Http\Controllers;

use App\Models\CategoryVisit;
use Carbon\Carbon;
use Illuminate\Http\Request;

class AggregatesController extends Controller
{
    public function aggregate(Request $request, $period)
{
    $startDateTime = $this->getStartDateTime($period);
    $endDateTime = Carbon::now();
    
    $aggregates = CategoryVisit::select('category', 'image')  // include 'image' field
        ->selectRaw('SUM(visits) as total_visits')
        ->selectRaw('SUM(unique_visits) as unique_visits')
        ->whereBetween('updated_at', [$startDateTime, $endDateTime])
        ->groupBy('category', 'image')  // group by 'image' as well
        ->orderByDesc('unique_visits')
        ->get();
    
    return response()->json(['data' => $aggregates]);
}

    

    private function getStartDateTime($period)
    {
        switch ($period) {
            case '24hours':
                return Carbon::now()->subHours(24);
            case 'week':
                return Carbon::now()->subWeek();
            case 'month':
                return Carbon::now()->subMonth();
            case 'year':
                return Carbon::now()->subYear();
            default:
                return null;
        }
    }
}
