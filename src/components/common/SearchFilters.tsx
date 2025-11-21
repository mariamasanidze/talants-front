import { Search, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TalentFilters } from "@/types";
import { useTranslation } from "react-i18next";

interface SearchFiltersProps {
  filters: TalentFilters;
  onFiltersChange: (filters: TalentFilters) => void;
  onSearch: () => void;
  onReset: () => void;
  isLoading?: boolean;
}

export const SearchFilters = ({
  filters,
  onFiltersChange,
  onSearch,
  onReset,
  isLoading = false,
}: SearchFiltersProps) => {
  const { t } = useTranslation();

  const updateFilter = (key: keyof TalentFilters, value: string) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  return (
    <Card className="cosmic-card shadow-lg border-0 bg-gradient-to-r from-background via-background to-background/95">
      <CardContent className="p-6">
        <div className="flex flex-wrap items-center gap-4 lg:gap-6">

          {/* Skills */}
          <div className="flex-1 min-w-48">
            <Input
              placeholder={t("filters.skills")}
              value={filters.skills}
              onChange={(e) => updateFilter("skills", e.target.value)}
              className="h-9 focus-outline text-sm bg-background/80"
            />
          </div>

          {/* Seniority */}
          <div className="min-w-36">
            <Select
              value={filters.seniority}
              onValueChange={(value) => updateFilter("seniority", value)}
            >
              <SelectTrigger className="h-9 focus-outline text-sm bg-background/80">
                <SelectValue placeholder={t("filters.seniority")} />
              </SelectTrigger>
              <SelectContent className="bg-popover border shadow-lg">
                <SelectItem value="any">{t("filters.seniority_any")}</SelectItem>
                <SelectItem value="junior">{t("filters.junior")}</SelectItem>
                <SelectItem value="mid-level">{t("filters.mid")}</SelectItem>
                <SelectItem value="senior">{t("filters.senior")}</SelectItem>
                <SelectItem value="lead">{t("filters.lead")}</SelectItem>
                <SelectItem value="principal">{t("filters.principal")}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Location */}
          <div className="min-w-32">
            <Select
              value={filters.location}
              onValueChange={(value) => updateFilter("location", value)}
            >
              <SelectTrigger className="h-9 focus-outline text-sm bg-background/80">
                <SelectValue placeholder={t("filters.location")} />
              </SelectTrigger>
              <SelectContent className="bg-popover border shadow-lg">
                <SelectItem value="any">{t("filters.location_any")}</SelectItem>
                <SelectItem value="remote">{t("filters.remote")}</SelectItem>
                <SelectItem value="usa">{t("filters.usa")}</SelectItem>
                <SelectItem value="europe">{t("filters.europe")}</SelectItem>
                <SelectItem value="asia">{t("filters.asia")}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Salary */}
          <div className="flex gap-2 min-w-32">
            <Input
              placeholder={t("filters.minSalary")}
              value={filters.minSalary}
              onChange={(e) => updateFilter("minSalary", e.target.value)}
              className="h-9 text-sm w-20 bg-background/80"
            />
            <Input
              placeholder={t("filters.maxSalary")}
              value={filters.maxSalary}
              onChange={(e) => updateFilter("maxSalary", e.target.value)}
              className="h-9 text-sm w-20 bg-background/80"
            />
          </div>

          {/* Availability */}
          <div className="min-w-36">
            <Select
              value={filters.availability}
              onValueChange={(value) => updateFilter("availability", value)}
            >
              <SelectTrigger className="h-9 focus-outline text-sm bg-background/80">
                <SelectValue placeholder={t("filters.availability")} />
              </SelectTrigger>
              <SelectContent className="bg-popover border shadow-lg">
                <SelectItem value="any">{t("filters.any")}</SelectItem>
                <SelectItem value="immediate">{t("filters.available_now")}</SelectItem>
                <SelectItem value="2weeks">{t("filters.available_2w")}</SelectItem>
                <SelectItem value="1month">{t("filters.available_1m")}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Actions */}
          <div className="flex gap-2 ml-auto">
            <Button
              onClick={onSearch}
              size="sm"
              className="h-9 px-4 bg-primary hover:bg-primary/90"
              disabled={isLoading}
            >
              <Search className="w-4 h-4 mr-2" />
              {isLoading ? t("filters.searching") : t("filters.search")}
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={onReset}
              className="h-9 px-3"
              disabled={isLoading}
            >
              <RotateCcw className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
