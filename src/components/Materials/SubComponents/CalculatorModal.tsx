/** @format */

"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface CalculatorModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function CalculatorModal({
  open,
  onOpenChange,
}: CalculatorModalProps) {
  const [dimensions, setDimensions] = useState({
    length: "2",
    width: "2",
    height: "2",
  });
  const [result, setResult] = useState({
    soilVolume: 0,
    truckCapacity: 6.7,
    estimatedLoads: 0,
  });
  const [showResults, setShowResults] = useState(false);

  const calculateVolume = () => {
    const length = parseFloat(dimensions.length);
    const width = parseFloat(dimensions.width);
    const height = parseFloat(dimensions.height);

    const volume = length * width * height;
    const loads = Math.ceil(volume / result.truckCapacity);

    setResult({
      ...result,
      soilVolume: volume,
      estimatedLoads: loads,
    });
    setShowResults(true);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[400px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-base  sm:text-lg font-bold text-primary">
            Tipper Truck Load Calculator
          </DialogTitle>
          <p className="text-xs sm:text-sm text-primary">
            Enter soil dimensions to calculate volume and required loads
          </p>
        </DialogHeader>

        <div className="space-y-4">
          {/* Dimension Inputs */}
          <div className="grid grid-cols-3 gap-1 sm:gap-2">
            <div>
              <label className="text-xs sm:text-sm font-medium text-primary mb-2 block">
                Length (m)
              </label>

              <Input
                type="number"
                min="0"
                value={dimensions.length}
                onChange={(e) =>
                  setDimensions((prev) => ({
                    ...prev,
                    length: e.target.value,
                  }))
                }
                className="w-full border-2 border-primary focus-visible:ring-0 text-center pr-6"
                placeholder="2"
              />
            </div>

            <div>
              <label className="text-xs sm:text-sm font-medium text-primary mb-2 block">
                Width (m)
              </label>

              <Input
                type="number"
                min="0"
                value={dimensions.width}
                onChange={(e) =>
                  setDimensions((prev) => ({
                    ...prev,
                    width: e.target.value,
                  }))
                }
                className="w-full border-2 border-primary focus-visible:ring-0 text-center pr-6"
                placeholder="2"
              />
            </div>

            <div>
              <label className="text-xs sm:text-sm font-medium text-primary mb-2 block">
                Height (m)
              </label>

              <Input
                type="number"
                min="0"
                value={dimensions.height}
                onChange={(e) =>
                  setDimensions((prev) => ({
                    ...prev,
                    height: e.target.value,
                  }))
                }
                className="w-full  border-2 border-primary focus-visible:ring-0 text-center pr-6"
                placeholder="2"
              />
            </div>
          </div>

          {/* Calculate Button */}
          <div className="w-full flex sm:justify-end">
            <Button
              onClick={calculateVolume}
              className="w-full sm:w-fit h-8 border-2 border-amber-800 rounded-sm bg-custom-orange hover:bg-custom-orange/80 text-primary font-bold py-3"
            >
              CALCULATE VOLUME
            </Button>
          </div>
          {/* Results Section */}

          <div className="bg-[#36B37E0D] rounded-lg p-4 ">
            <h3 className="text-base  sm:text-lg font-bold text-primary sm:mb-1 md:mb-2">
              Results
            </h3>

            <div className="flex justify-between items-center pb-4">
              <span className="text-xs sm:text-sm text-primary ">
                Soil Volume:
              </span>
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm text-primary">
                  {result.soilVolume.toFixed(2)} m³
                </span>
                <Button
                  variant="link"
                  className="text-blue-500 hover:text-blue-700 p-0 h-auto"
                  onClick={() => setShowResults(false)}
                >
                  Edit
                </Button>
              </div>
            </div>

            <div className="flex justify-between items-center  border-primary/20 pb-4">
              <span className="text-xs sm:text-sm text-primary ">
                Truck Capacity:
              </span>
              <span className="text-xs sm:text-sm text-primary">
                {result.truckCapacity} m³ / load
              </span>
            </div>

            <div className="flex justify-between items-center border-t border-primary/20 pt-2">
              <span className="text-xs sm:text-sm text-primary font-medium">
                Estimated Loads Required
              </span>
              <span className="text-xs sm:text-sm font-bold text-primary">
                {result.estimatedLoads} loads
              </span>
            </div>

            <p className="text-xs text-custom-orange pt-4">
              *Based on standard tipper truck capacity. Actual loads may vary.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
